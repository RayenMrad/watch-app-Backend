const express = require("express");
const router = express.Router();

const cartController = require("../controller/cartController");

router.post("/cart", cartController.createCart);
router.get("/cart/:user", cartController.getCartByUserId);
router.put("/cart/:id", cartController.updateCart);

module.exports = router;
