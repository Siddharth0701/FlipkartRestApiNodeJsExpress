const exprees = require("express");
const userController = require("../controllers/user.controller");
const router = exprees.Router();
router.post("/", userController.save);
router.get("/", userController.index);
router.get("/:id", userController.show);
router.patch("/:id", userController.update);
router.delete("/:id", userController.deleteUser);

module.exports = router;
