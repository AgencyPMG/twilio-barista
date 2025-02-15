if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const log = require('pino')();
const pinoMiddleware = require('express-pino-logger')({ logger: log });
const Sentry = require('@sentry/node');
const { loadConfig } = require('./data/config');
const { forceSsl } = require('./utils/request');

const PORT = process.env.PORT || 3000;
const CLIENT_CODE_PATH = path.resolve(__dirname, '..', 'client-dist');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

(async function() {
  const app = express();

  if (process.env.NODE_ENV === 'production') {
    app.use(forceSsl);
  }

  app.use(pinoMiddleware);
  app.use(express.static(CLIENT_CODE_PATH));

  app.use('/api', require('./api'));

  app.get('*', (req, res, next) => {
    res.sendFile(path.join(CLIENT_CODE_PATH, 'index.html'));
  });

  try {
    log.info('Load config from Twilio Sync');
    await loadConfig();
    app.listen(PORT, () => {
      log.info(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    log.error(err);
  }
})().catch(console.error);
