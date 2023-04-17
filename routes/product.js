const exprees = require("express");
const productController = require("../controllers/product.controller");
const router = exprees.Router();
router.post("/", productController.save);
router.get("/", productController.index);
router.get("/:id", productController.show);
router.patch("/:id", productController.update);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
