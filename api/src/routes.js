const express = require("express");
const multer = require("multer");

const EventsController = require("./controllers/events_controller");

const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const routes = express.Router();

routes.post("/api/events", upload.single('file'), EventsController.organize_events);

module.exports = routes;