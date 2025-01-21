const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    sales: [{ type: String, Required: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartSchema);
