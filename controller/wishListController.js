const wishList = require("../model/wishList");

//add wishlist
const createWishList = async (req, res) => {
  const newWishList = new WishList(req.body);
  try {
    const savedWishList = await newWishList.save();
    res.status(201).json(savedWishList);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getWishListById = async (req, res) => {
  const uid = req.body.userId;
  try {
    await WishList.findOne({ userId: uid }).then(async (wishlist) => {
      if (wishlist) {
        res.status(200).json(wishlist);
      } else {
        res.status(404).json({ msg: "wishlist not found" });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateWishList = async (req, res) => {
  var id = req.body.id;
  var watchs = req.body.watchs;

  try {
    const updatedWishList = await WishList.findByIdAndUpdate(
      id,
      {
        watchs: watchs,
      },
      { new: true }
    );
    res.status(200).json(updatedWishList);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createWishList, getWishListById, updateWishList };
