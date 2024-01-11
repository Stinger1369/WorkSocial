const express = require("express");
const router = express.Router();
const SurveyLikeController = require("../controllers/SurveyLikeController");

router.post("/surveys/:surveyId/likes", SurveyLikeController.likeSurvey);
router.delete(
  "/surveys/:surveyId/likes/:userId",
  SurveyLikeController.unlikeSurvey
);

module.exports = router;
