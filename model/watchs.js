const mongoose = require("mongoose");
const category = require("./category");

const watchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    reference: { type: String, unique: true },
    description: { type: String, required: true },
    size: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("watch", watchSchema);
