// app.js
const express = require('express');
const { json } = require('express');
const functions = require("firebase-functions")

const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors'); // Import the cors module

const app = express();
app.use(cors()); // Apply CORS middleware to all routes
app.use(json());

// Use product routes

// http://localhost:8081/api/shipping?address=123%20Main%20St&state=VIC&zipCode=3000&country=Australia

app.use('/', orderRoutes);

exports.order = functions.https.onRequest(app);


