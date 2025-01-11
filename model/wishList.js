const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema(
  {
    watches: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Watch", required: true },
    ],
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("wishList", wishListSchema);
