const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    sales: [
      //liste des id du sales
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartSchema);
