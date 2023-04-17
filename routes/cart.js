const exprees = require("express");
const cartController = require("../controllers/cart.controller");
const router = exprees.Router();
router.post("/", cartController.save);
router.get("/", cartController.index);
router.get("/:id", cartController.show);
router.patch("/:id", cartController.update);
router.delete("/:id", cartController.deleteCart);

module.exports = router;
