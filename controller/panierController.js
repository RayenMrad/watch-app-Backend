const panier = require("../model/panier");

//add panier
const createPanier = async (req, res) => {
  const newPanier = new panier(req.body);
  try {
    const savedPanier = await newPanier.save();
    res.status(201).json(savedPanier);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPanierById = async (req, res) => {
  const uid = req.body.userId;
  try {
    await panier.findOne({ userId: uid }).then(async (p) => {
      if (p) {
        res.status(200).json(p);
      } else {
        res.status(404).json({ msg: "panier not found" });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePanier = async (req, res) => {
  var id = req.body.id;
  var watchs = req.body.watchs;

  try {
    const updatedPanier = await panier.findByIdAndUpdate(
      id,
      {
        watchs: watchs,
      },
      { new: true }
    );
    res.status(200).json(updatedPanier);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createPanier, getPanierById, updatePanier };
