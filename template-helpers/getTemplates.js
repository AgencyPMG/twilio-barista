function getHelpPrivacyTemplate(numOptions, templateName) {

  // There are always 3 vars (short title, full title, desc) per options  => numOptions * 3

  const variables = Array.from(Array(numOptions * 3).keys()).reduce((accu, idx) => {
    accu[idx] = ""
    return accu;
  }, {});

  const indiciesOfFullTitles = [], items = [];
  for (let i = 0; i < numOptions; i++) {
    indiciesOfFullTitles.push(`- {{${i * 3}}}`);
    items.push({
      item: `{{${i * 3 + 1}}}`,
      id: `{{${i * 3 + 1}}}`,
      description: `{{${i * 3 + 2}}}`
    })
  }

  const body = `Welcome to the Twilio booth! Message the smoothie you would like and we'll start preparing it. The available options are:\n${indiciesOfFullTitles.join("\n")}\nAlternatively write "cancel order" to cancel your existing order or "queue" to determine your position in the queue.`;

  return {
    friendly_name: templateName,
    language: "en",
    variables,
    types: {
      "twilio/list-picker": {
        body,
        items,
        "button": "Show Ingredients"
      },
      "twilio/text": {
        "body": body
      }
    }
  }
}


function getWrongOrderTemplate(numOptions, templateName) {

  // There's always var 0 and then 3 additional vars (short title, full title, desc) per options  => numOptions * 3 + 1

  const variables = Array.from(Array(numOptions * 3 + 1).keys()).reduce((accu, idx) => {
    accu[idx] = ""
    return accu;
  }, {});

  const indiciesOfFullTitles = [], items = [];
  for (let i = 0; i < numOptions; i++) {
    indiciesOfFullTitles.push(`- {{${i * 3 + 1}}}`);
    items.push({
      item: `{{${i * 3 + 2}}}`,
      id: `{{${i * 3 + 2}}}`,
      description: `{{${i * 3 + 3}}}`
    })
  }

  const body = `Seems like your order of "{{0}}" is not something we can serve. Possible orders are:\n${indiciesOfFullTitles.join("\n")}\nWrite "I need help" to get an overview of other commands.`;

  return {
    friendly_name: templateName,
    language: "en",
    variables,
    types: {
      "twilio/list-picker": {
        body,
        items,
        "button": "Show Ingredients"
      },
      "twilio/text": {
        "body": body
      }
    }
  }
}


function getPostRegistrationTemplate(numOptions, templateName) {

  // There's always var 0 and then 3 additional vars (short title, full title, desc) per options  => numOptions * 3 + 1

  const variables = Array.from(Array(numOptions * 3 + 1).keys()).reduce((accu, idx) => {
    accu[idx] = ""
    return accu;
  }, {});

  const indiciesOfFullTitles = [], items = [];
  for (let i = 0; i < numOptions; i++) {
    indiciesOfFullTitles.push(`- {{${i * 3 + 1}}}`);
    items.push({
      item: `{{${i * 3 + 2}}}`,
      id: `{{${i * 3 + 2}}}`,
      description: `{{${i * 3 + 3}}}`
    })
  }

  const body = `Thank you! Now let's get you some smoothies. What would you like? The options are:\n${indiciesOfFullTitles.join("\n")}\nPS: Every attendee can get up to {{0}} beverages.`;

  return {
    friendly_name: templateName,
    language: "en",
    variables,
    types: {
      "twilio/list-picker": {
        body,
        items,
        "button": "Show Ingredients"
      },
      "twilio/text": {
        "body": body
      }
    }
  }
}

module.exports = {
  getHelpPrivacyTemplate,
  getWrongOrderTemplate,
  getPostRegistrationTemplate
};
