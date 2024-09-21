const UsersRepository = require("../repositories/UsersRepository.js");

function UsersController() {
  const index = async (request, response) => {
    const listOrder = request.url.searchParams.get("order");

    const users = await UsersRepository.index(listOrder);

    return response.json(users);
  };

  const get = async (request, response) => {
    const { id = null } = request?.params;

    const user = await UsersRepository.get(id);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).json(user);
  };

  const create = async (request, response) => {
    const {
      name = null,
      email = null,
      age = null,
      nickname = null,
    } = request?.body;

    if (!name) {
      return response
        .status(400)
        .json({ message: "The user name is required for registration" });
    }

    const newUser = await UsersRepository.create({
      name,
      email,
      age,
      nickname,
    });

    return response.status(201).json(newUser);
  };

  const update = async (request, response) => {
    const { id = null } = request?.params;

    const userToBeUpdated = await UsersRepository.get(id);

    if (!userToBeUpdated) {
      return response.status(404).json({ message: "User not found" });
    }

    const {
      name = userToBeUpdated.name,
      email = userToBeUpdated.email,
      age = userToBeUpdated.age,
      nickname = userToBeUpdated.nickname,
    } = request?.body;

    if (!name) {
      return response
        .status(400)
        .json({ message: "The user name is required for update" });
    }

    const updatedUser = await UsersRepository.update(userToBeUpdated, {
      name,
      email,
      age,
      nickname,
    });

    return response.json({ updated: updatedUser });
  };

  const destroy = async (request, response) => {
    const { id = null } = request?.params;

    const userToBeRemoved = await UsersRepository.get(id);

    if (!userToBeRemoved) {
      response.status(404).json({ message: "User not found" });
    }

    await UsersRepository.destroy(id);

    return response.status(200).json({ deletedUser: userToBeRemoved });
  };

  return { index, create, get, update, destroy };
}

module.exports = UsersController();
