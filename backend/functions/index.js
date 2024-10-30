/* eslint-disable */

const functions = require("firebase-functions");
const express = require("express");

const app = express();

const test = require("./test");

app.use("/test", test);

exports.api = functions.https.onRequest(app);
