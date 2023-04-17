const models = require("../models");
function save(req, res) {
  const order = {
    email: req.body.email,
    address: req.body.address,
    contact: req.body.contact,
    totalPrice: req.body.totalPrice,
    userId: req.body.userId,
  };
  models.Order.create(order)
    .then((result) => {
      res.status(201).json({
        message: "Post create successfully",
        order: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

function index(req, res) {
  models.Order.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong !",
      });
    });
}
function show(req, res) {
  const id = req.params.id;
  models.Order.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "Post not found!",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went worong !",
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updatedModel = {
    email: req.body.email,
    address: req.body.address,
    contact: req.body.contact,
    totalPrice: req.body.totalPrice,
    userId: req.body.userId,
  };
  models.Order.update(updatedModel, { where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "post updated successfully",
        post: updatedModel,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong !",
        error: error,
      });
    });
}

function deleteOrder(req, res) {
  const id = req.params.id;

  models.Order.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "post deleted successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong !",
        error: error,
      });
    });
}
module.exports = {
  save: save,
  index: index,
  show: show,
  update: update,
  deleteOrder: deleteOrder,
};
