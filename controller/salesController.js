const sales = require("../model/sales");
const Variant = require("../model/variant");

//add sales
const createSales = async (req, res) => {
  const { variantId, userId, quantity, totalPrice } = req.body;

  try {
    const variant = await Variant.findById(variantId);
    if (!variant) {
      return res.status(404).json({ msg: "variant not found" });
    }

    if (variant.quantity < quantity) {
      return res
        .status(400)
        .json({ msg: "insufisant stock for this variant !" });
    }

    //const totalPrice = quantity * variant.watchId.price;
    const newSales = new sales({
      variantId,
      userId,
      quantity,
      totalPrice,
    });

    const savedSales = await newSales.save();
    // variant.quantity -= quantity;
    // await variant.save();
    res.status(201).json({ msg: "sale created successfully ! " });
  } catch (err) {
    res.status(500).json({ msg: "error creating sales ", error: err.message });
  }
};

const getSalesById = async (req, res) => {
  const sid = req.params.id;
  try {
    const Sales = await sales.findById(sid);
    if (!Sales) {
      res.status(404).json({ msg: "sales Not Found ! " });
    } else {
      res.status(200).json(Sales);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateSales = async (req, res) => {
  const sid = req.body.id;
  try {
    const sales = await sales.findByIdAndUpdate(sid);
    if (!sales) {
      res.status(404).json({ msg: "sales Not Found ! " });
    } else {
      res.status(200).json(sales);
    }
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error to update sales ! ", error: err.message });
  }
};

const deleteSales = async (req, res) => {
  const sid = req.params.id;
  try {
    const Sales = await sales.findByIdAndDelete(sid);
    if (!Sales) {
      res.status(404).json({ msg: "sales Not Found ! " });
    } else {
      res.status(200).json(Sales);
    }
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error to Delete sales ! ", error: err.message });
  }
};

const calculTotal = async (req, res) => {
  const { variantId, quantity } = req.body;

  try {
    const variant = await Variant.findById(variantId).populate("watchId");
    if (!variant) {
      return res.status(404).json({ msg: "Variant not found" });
    }

    if (quantity <= 0) {
      return res.status(400).json({ msg: "Quantity must be greater than 0" });
    }

    const totalPrice = quantity * variant.watchId.price;

    res.status(200).json({ totalPrice });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error calculating total", error: err.message });
  }
};
module.exports = {
  createSales,
  getSalesById,
  updateSales,
  deleteSales,
  calculTotal,
};
