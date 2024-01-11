const express = require("express");
const router = express.Router();
const EventController = require("../controllers/EventController");
const { upload } = require("../../app");

router.get("/events", EventController.getAllEvents);
router.get("/events/:id", EventController.getEventById);
router.post("/events", upload.single("image"), EventController.createEvent);
router.put("/events/:id", EventController.updateEvent);
router.delete("/events/:id", EventController.deleteEvent);

module.exports = router;
