const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
  {
    variantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "variant",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    quantity: { type: Number, required: true },
    totalPrice: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sales", salesSchema);
