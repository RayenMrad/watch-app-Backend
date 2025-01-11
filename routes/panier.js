const express = require("express");
const router = express.Router();

const panierController = require("../controller/panierController");

router.post("/panier", panierController.createPanier);
router.get("/panier/:id", panierController.getPanierById);
router.put("/panier/:id", panierController.updatePanier);

module.exports = router;
