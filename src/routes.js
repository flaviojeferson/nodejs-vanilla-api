const UsersController = require("./controllers/UsersController");

module.exports = [
  {
    endpoint: "/",
    method: "GET",
    controller: UsersController.index,
  },
  {
    endpoint: "/",
    method: "POST",
    controller: UsersController.create,
  },
  {
    endpoint: "/:id",
    method: "DELETE",
    controller: UsersController.destroy,
  },
  {
    endpoint: "/:id",
    method: "GET",
    controller: UsersController.get,
  },
  {
    endpoint: "/:id",
    method: "PUT",
    controller: UsersController.update,
  },
];
