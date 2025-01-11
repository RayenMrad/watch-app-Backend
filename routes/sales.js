const express = require("express");
const router = express.Router();

const salesController = require("../controller/salesController");

router.post("/sales", salesController.createSales);
router.get("/sales/:id", salesController.getSalesById);
router.put("/sales/:id", salesController.updateSales);
router.delete("/sales/:id", salesController.deleteSales);
router.post("/sales/:id", salesController.calculTotal);

module.exports = router;
