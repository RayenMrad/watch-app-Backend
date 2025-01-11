const express = require("express");
const router = express.Router();

const wishListController = require("../controller/wishListController");

router.post("/wishlist", wishListController.createWishList);
router.get("/wishlist/:id", wishListController.getWishListById);
router.put("/wishlist/:id", wishListController.updateWishList);

module.exports = router;
