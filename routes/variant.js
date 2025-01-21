const express = require("express");
const router = express.Router();

const variantController = require("../controller/variantController");

router.post("/variant", variantController.addVariant);
router.get("/variants", variantController.getAllVariants);

module.exports = router;
