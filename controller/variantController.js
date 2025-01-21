const variant = require("../model/variant");

const addVariant = async (req, res) => {
  const newVariant = new variant(req.body);
  try {
    const savedVariant = await newVariant.save();
    res.status(201).json(savedVariant);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllVariants = async (req, res) => {
  try {
    await variant.find().then(async (variants) => {
      if (variants) {
        res.status(200).json(variants);
      } else {
        res.status(404).json({ msg: "variants not found" });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  addVariant,
  getAllVariants,
};
