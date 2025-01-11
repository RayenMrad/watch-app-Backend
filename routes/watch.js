const express = require("express");
const router = express.Router();

const watchController = require("../controller/watchController");

router.post("/watch", watchController.addWatch);
router.get("/watchs", watchController.getAllWatchs);
router.get("/watch/:id", watchController.getWatchById);
router.delete("/watch/:id", watchController.deleteWatch);

module.exports = router;
