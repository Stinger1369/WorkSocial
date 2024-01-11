const express = require("express");
const router = express.Router();
const EventCommentController = require("../controllers/EventCommentController");

router.get(
  "/events/:eventId/comments",
  EventCommentController.getAllCommentsForEvent
);
router.post(
  "/events/:eventId/comments",
  EventCommentController.createCommentForEvent
);
router.delete(
  "/events/:eventId/comments/:commentId",
  EventCommentController.deleteComment
);

module.exports = router;
