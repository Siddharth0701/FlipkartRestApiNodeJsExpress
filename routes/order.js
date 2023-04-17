const exprees = require("express");
const orderController = require("../controllers/order.controller");
const router = exprees.Router();
router.post("/", orderController.save);
router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
