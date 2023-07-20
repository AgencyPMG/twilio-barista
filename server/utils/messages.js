const template = require('lodash.template');

const { config } = require('../data/config');

const FIRST_OPTION = "Twilio (Colombia)", //TODO remove these hard coded options once the length of list items is variable
  FIRST_DETAILS = "Strawberry, Pineapple, Apple, Sunflower Seeds 🍓🍍🍏🌻",
  SECOND_OPTION = "SendGrid (Aquamarine)",
  SECOND_DETAILS = "Pineapple, Banana, Coconut Milk, Dates, Flaxseed 🍍🍌🥥🌴",
  THIRD_OPTION = "Segment (Lambada)",
  THIRD_DETAILS = "Orange, Mango, Banana, Passion Fruit, Flaxseed, Coconut Oil 🍊🥭🍌🥥";

const DATA_POLICY =
  '\n\nWe only use your phone number to notify you about our smoothie service and redact all the messages & phone numbers afterwards.';

// available values: originalMessage, availableOptions
const WRONG_ORDER_MESSAGE_SID = "HXbc61e3fabb69e915d079cf516cad9cc5";

// available values: product, orderNumber
const EXISTING_ORDER_MESSAGES = [
  "We're still making you a ${product}. Check order #${orderNumber} with our staff if you think there's something wrong.",
];

// available values: product, orderNumber
const ORDER_CREATED_MESSAGES = [
  "Thanks for ordering a ${product} from the Twilio powered Smoothie Bar. Your order number is #${orderNumber}. We'll text you back when it's ready. ${dataPolicy} In the meantime check out this repo ${repoUrl} if you want to see how we built this app. ",
];

// available values: product, orderNumber
const ORDER_CANCELLED_MESSAGES = [
  'Your ${product} order has been cancelled. Please check with our staff if you think something is wrong. Your order number was #${orderNumber}.',
];

// available values: product, orderNumber
const ORDER_READY_MESSAGES = [
  'Your ${product} is ready. You can skip the queue and collect it at ${orderPickupLocation} right away, ask for order number #${orderNumber}.',
];

// available values:
const SYSTEM_OFFLINE_MESSAGES = [
  'No more smoothies 😱\nSeems like we are out of smoothies for today. Have a great day!',
];

// available values: availableOptions
const HELP_MESSAGE_SID = "HX0f91129ec6e3832b310f4f95533daa01";

// available values:
const NO_OPEN_ORDER_MESSAGES = [
  'Seems like you have no open order at the moment. Simply message us the name of the beverage you would like.',
];

// available values: queuePosition
const QUEUE_POSITION_MESSAGES = [
  'There are currently ${queuePosition} orders before yours.',
];

// available values: product, orderNumber
const CANCEL_ORDER_MESSAGES = [
  'Your order #${orderNumber} for ${product} has been cancelled successfully.',
];

// available values: error
const OOPS_MESSAGES = [
  'Oops something went wrong! Talk to someone from Twilio and see if they can help you.',
];

const POST_REGISTRATION_MESSAGE_SID = "HX82a49e071f02f192f4f8c7eb19257bf4";

const MAX_ORDERS = [
  "It seems like you've reached the maximum numbers of orders we allowed at this event. Sorry.",
];

const EVENT_REGISTRATION = [
  "Which event are you currently at? Please reply with the number of your event below. \n${choices}",
];

const NO_ACTIVE_EVENTS = [
  'Oh no! 😕 It seems like we are not serving at the moment. Please check back later 🙂',
];

function pickRandom(arr) {
  const len = arr.length;
  const idx = Math.floor(Math.random() * len);
  return arr[idx];
}

function getWrongOrderMessage(originalMessage, availableOptions) {
  return {
    contentSid: WRONG_ORDER_MESSAGE_SID,
    contentVariables: JSON.stringify({
      0: originalMessage,
      1: FIRST_OPTION,
      2: FIRST_DETAILS,
      3: SECOND_OPTION,
      4: SECOND_DETAILS,
      5: THIRD_OPTION,
      6: THIRD_DETAILS
    }),
  };
}

function getExistingOrderMessage(product, orderNumber) {
  const tmpl = template(pickRandom(EXISTING_ORDER_MESSAGES));
  return {
    body: tmpl({ product, orderNumber })
  }
}

function getOrderCreatedMessage(product, orderNumber, forEvent) {
  const repoUrl = config(forEvent).repoUrl;
  const dataPolicy = DATA_POLICY;
  const tmpl = template(pickRandom(ORDER_CREATED_MESSAGES));
  return {
    body: tmpl({ product, orderNumber, repoUrl, dataPolicy })
  }
}

function getOrderCancelledMessage(product, orderNumber) {
  const tmpl = template(pickRandom(ORDER_CANCELLED_MESSAGES));
  return {
    body: tmpl({ product, orderNumber })
  }
}

function getOrderReadyMessage(product, orderNumber, forEvent) {
  const orderPickupLocation = config(forEvent).orderPickupLocation
  const tmpl = template(pickRandom(ORDER_READY_MESSAGES));
  return {
    body: tmpl({ product, orderNumber, orderPickupLocation })
  }
}

function getSystemOfflineMessage(forEvent) {
  const customMessage = config(forEvent).offlineMessage;
  if (typeof customMessage === 'string' && customMessage.trim().length > 0) {
    return customMessage;
  }
  const tmpl = template(pickRandom(SYSTEM_OFFLINE_MESSAGES));
  return {
    body: tmpl()
  }
}

function getHelpMessage(availableOptions) {
  return {
    contentSid: HELP_MESSAGE_SID,
    contentVariables: JSON.stringify({
      1: FIRST_OPTION,
      2: FIRST_DETAILS,
      3: SECOND_OPTION,
      4: SECOND_DETAILS,
      5: THIRD_OPTION,
      6: THIRD_DETAILS
    }),
  };
}

function getNoOpenOrderMessage() {
  const tmpl = template(pickRandom(NO_OPEN_ORDER_MESSAGES));
  return {
    body: tmpl()
  }
}

function getQueuePositionMessage(queuePosition) {
  const tmpl = template(pickRandom(QUEUE_POSITION_MESSAGES));
  return {
    body: tmpl({ queuePosition })
  }
}

function getCancelOrderMessage(product, orderNumber) {
  const tmpl = template(pickRandom(CANCEL_ORDER_MESSAGES));
  return {
    body: tmpl({ product, orderNumber })
  }
}

function getOopsMessage(error) {
  const tmpl = template(pickRandom(OOPS_MESSAGES));
  return {
    body: tmpl({ error })
  }
}

function getPostRegistrationMessage(availableOptions, maxNumberOrders) {
  return {
    contentSid: POST_REGISTRATION_MESSAGE_SID,
    contentVariables: JSON.stringify({
      0: maxNumberOrders,
      1: FIRST_OPTION,
      2: FIRST_DETAILS,
      3: SECOND_OPTION,
      4: SECOND_DETAILS,
      5: THIRD_OPTION,
      6: THIRD_DETAILS
    }),
  };
}

function getMaxOrdersMessage() {
  const tmpl = template(pickRandom(MAX_ORDERS));
  return {
    body: tmpl()
  }
}

function getEventRegistrationMessage(choices) {
  const tmpl = template(pickRandom(EVENT_REGISTRATION)); //TODO better to use a list message as well
  return {
    body: tmpl({ choices: choices.join('\n') })
  }
}

function getNoActiveEventsMessage() {
  const tmpl = template(pickRandom(NO_ACTIVE_EVENTS));
  return {
    body: tmpl()
  }
}

module.exports = {
  getWrongOrderMessage,
  getExistingOrderMessage,
  getOrderCreatedMessage,
  getOrderCancelledMessage,
  getOrderReadyMessage,
  getSystemOfflineMessage,
  getHelpMessage,
  getMaxOrdersMessage,
  getNoOpenOrderMessage,
  getQueuePositionMessage,
  getCancelOrderMessage,
  getOopsMessage,
  getPostRegistrationMessage,
  getEventRegistrationMessage,
  getNoActiveEventsMessage,
};
