const { db } = require("../utils/firebase");
const { Timestamp, FieldValue } = require("firebase-admin/firestore");

exports.sendMessage = async (req, res) => {
  try {
    const { chatId, senderId, text } = req.body;

    console.log("Request body:", req.body); // Log the incoming request body

    // Validate the chatId
    if (!chatId) {
      return res.status(400).send({ error: "chatId is required." });
    }

    const message = {
      senderId,
      text,
      timestamp: Timestamp.now(),
    };

    const chatRef = db.collection("chats").doc(chatId);

    await chatRef.set({ messages: [] }, { merge: true });
    await chatRef.update({
      messages: FieldValue.arrayUnion(message),
    });

    res.status(200).send({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).send({ error: "Failed to send message" });
  }
};
