const {
  dialogflow,
  BasicCard
} = require("actions-on-google");


// Instantiate the Dialogflow client.
const app = dialogflow({ debug: true });
const ITEM = 'itemname';

// Handlers go here..
app.intent("pricechecker - custom - yes", (conv, {itemname}) => {

   // handler for this intent


    const item = conv.parameters['itemname'];
    const price = 10;


     conv.ask(`${item} ราคา ${price}บาท`);




});



module.exports = app;
