const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    sales: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartSchema);
