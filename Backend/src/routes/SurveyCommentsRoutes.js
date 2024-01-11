const express = require("express");
const router = express.Router();
const SurveyCommentController = require("../controllers/SurveyCommentController");

router.get(
  "/surveys/:surveyId/comments",
  SurveyCommentController.getAllCommentsForSurvey
);
router.post(
  "/surveys/:surveyId/comments",
  SurveyCommentController.createCommentForSurvey
);
router.delete(
  "/surveys/:surveyId/comments/:commentId",
  SurveyCommentController.deleteComment
);

module.exports = router;
