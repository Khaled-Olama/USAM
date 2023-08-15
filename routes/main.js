const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/:page?", mainController.getTeams, mainController.index);
router.get("/teams-img/:img", mainController.getImage);

module.exports = router;
