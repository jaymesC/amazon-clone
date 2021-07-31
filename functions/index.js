const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I4n1IHbrYuuUd2QgyC7qanEKzB2FhwHQ8ozzIHm1W7rkuLdchnFTXG3IfPW6n3xXVkTiz3zBYynMXzPmB55WaWY00zKxavfXv"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -  API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved!! for this amount >>> '. total)

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, //subunits of the currency
    currency: "usd"
  });

  //Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret 
  })
})

// - Listen command
exports.api = functions.https.onRequest(app)