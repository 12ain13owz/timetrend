const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.get("/best/:limit", controller.getBestSeller);
router.get("/product", controller.getProduct);
router.get("/product/:id", controller.getProductById);
router.get("/track/:track", controller.getTrackStatus);

router.post("/order", controller.onNewOrder);
router.post("/inbox", controller.onNewInbox);

module.exports = router;
