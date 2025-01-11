const mongoose = require("mongoose");
const user = require("./user");

const commandSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    sales: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sales",
        required: true,
      },
    ],
    adresse: { type: String, required: true },
    reference: { type: String, required: true },
    dateCommand: { type: Date, required: true },
    statutCommand: {
      type: String,
      enum: ["paid", "shipped", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("command", commandSchema);
