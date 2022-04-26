// Dependencies:
const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const environment = process.env.NODE_ENV;
const uri = (environment == 'production') ? process.env.PRODUCTION_URI : environment == 'test' ? `mongodb://admin:password@localhost:27017` : `mongodb://localhost:27017`;

// Apply Middleware:
app.use(express.json()); // json body-parser. Required to parse json data.

// Set Server's Environmental Variables:
const PORT = process.env.PORT || 8080;

// Apply Routes to Express App:
let sampleRoute = require('./routes/sampleRoute');
app.use('/sampleRoute',sampleRoute);

mongoose.connect(
    uri, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(`Connected to mongoDB in ${environment} mode connecing to ${uri}`);
    }
);

// Start Server:
app.listen(PORT,() => {
    console.log(`${environment} environment started on port ${PORT}`);
});

module.exports = app;