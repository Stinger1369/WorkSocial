const express = require("express");
const router = express.Router();
const SurveyController = require("../controllers/SurveyController");
const { upload } = require("../../app");

router.get("/surveys", SurveyController.getAllSurveys);
router.get("/surveys/:id", SurveyController.getSurveyById);
router.post("/surveys", upload.single("image"), SurveyController.createSurvey);
router.put("/surveys/:id", SurveyController.updateSurvey);
router.delete("/surveys/:id", SurveyController.deleteSurvey);

module.exports = router;
