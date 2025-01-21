const wishList = require("../model/wishList");

//add wishlist
const createWishList = async (req, res) => {
  const newWishList = new wishList(req.body);
  try {
    const savedWishList = await newWishList.save();
    res.status(201).json(savedWishList);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getWishListById = async (req, res) => {
  const uid = req.params.userId;
  try {
    await wishList.findOne(uid).then(async (wishlist) => {
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
  const id = req.params.id;
  const watchs = req.body.watches;

  try {
    const updatedWishList = await wishList.findByIdAndUpdate(
      id,
      {
        watches: watchs,
      },
      { new: true }
    );
    res.status(200).json(updatedWishList);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createWishList, getWishListById, updateWishList };
