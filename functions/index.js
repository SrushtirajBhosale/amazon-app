const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_API_KEY}`);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) =>
  response.status(200).send("Namaste world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
  amount: total, // subunits of the currency
  currency: "inr",
  payment_method_types:['card']
  });

  // Ok - Created
  response.status(201).send({
    clientSecrete: paymentIntent.client_secrete,
  });
})

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/fir-95507/us-central1/api
// http://127.0.0.1:5001/app-186f4/us-central1/api

// app.listen(8080, ()=> {
//   console.log("server created successfully");
// })