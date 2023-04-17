const exprees = require("express");
const sellerController = require('../controllers/seller.controller');
const router = exprees.Router();
router.post("/", sellerController.save);
router.get("/", sellerController.index);
 router.get("/:id", sellerController.show);
 router.patch("/:id", sellerController.update);
 router.delete("/:id", sellerController.deletePost);

module.exports = router;
