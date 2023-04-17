const models = require("../models");
function save(req, res) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  models.User.create(user)
    .then((result) => {
      res.status(201).json({
        message: "Post create successfully",
        user: result,
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
  models.User.findAll()
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
  models.User.findByPk(id)
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
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  models.User.update(updatedModel, { where: { id: id } })
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

function deleteUser(req, res) {
  const id = req.params.id;

  models.User.destroy({ where: { id: id } })
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
  deleteUser: deleteUser,
};
