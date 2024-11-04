const express = require("express");
const router = express.Router();

// Route and handler for appCommunication feature
router.get("/", (req, res) => {
  res.send("Hello from the App Communication feature!");
});

module.exports = router;
