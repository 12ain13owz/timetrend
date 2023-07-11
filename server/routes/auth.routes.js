const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller");

router.get("/login", controller.getLogIn);
router.post("/login", controller.onLogIn);
router.post("/logout", controller.onLogOut);

router.get("/product", controller.getProduct);
router.get("/product/:id", controller.getProductByPK);
router.post("/product", controller.onNewProduct);
router.put("/product", controller.onUpdateProduct);

router.get("/inbox", controller.getInbox);
router.get("/inboxlist", controller.getInboxList);
router.put("/inbox", controller.onUpdateInbox);

router.get("/order", controller.getOrder);
router.get("/orderList", controller.getOrderList);
router.get("/order/:id", controller.getOrderData);

router.put("/order", controller.onUpdateOrder);
router.put("/track", controller.onUpdateTrack);

module.exports = router;
