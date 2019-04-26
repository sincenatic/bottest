'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {WebhookClient} = require('dialogflow-fulfillment');
const dialogFlowApp = require("./dialogflowApp");
const functions = require("firebase-functions");
const requestURL = require('request');



const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.post('/', dialogFlowApp);

server.get("/", (req, res) => {
  res.send("CONFIRMED RECEIPT OF GET.");
});

const PORT = 9000;
server.listen(PORT, () =>
console.log(`*** SERVER RUNNING LOCALLY ON PORT ${PORT} ***`)
);

exports.fulfillmentExpressServer = functions.https.onRequest(server);
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(dialogFlowApp);
