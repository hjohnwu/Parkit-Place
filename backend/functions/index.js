/* eslint-disable */

const functions = require("firebase-functions");
const express = require("express");
const app = express();

// Import routes
const test = require("./routes/test");
const chat = require("./routes/chat");

// Use routes
app.use("/test", test);
app.use("/chat", chat);

exports.api = functions.https.onRequest(app);
