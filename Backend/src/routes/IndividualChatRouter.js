const express = require("express");
const router = express.Router();
const IndividualChatController = require("../controllers/IndividualChatController");

router.get("/individualchats", IndividualChatController.getAllIndividualChats);
router.post("/individualchats", IndividualChatController.createIndividualChat);
router.delete(
  "/individualchats/:chatId",
  IndividualChatController.deleteIndividualChat
);

module.exports = router;
