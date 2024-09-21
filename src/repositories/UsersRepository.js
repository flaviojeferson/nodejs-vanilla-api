let users = require("../mocks/users.js");
let sortByName = require("../utils/sortByName.js");

module.exports = (function UsersRepository() {
  const index = (order = "asc") => {
    return new Promise((resolve) => resolve(sortByName(users, order)));
  };

  const get = (userId) => {
    return new Promise((resolve) =>
      resolve(users.find((currentUser) => currentUser.id === userId))
    );
  };

  const create = ({ name, email, nickname, age }) => {
    return new Promise((resolve) => {
      const newUser = {
        id: crypto.randomUUID(),
        name,
        email,
        nickname,
        age,
      };
      users.push(newUser);
      resolve(newUser);
    });
  };

  const update = (oldUser, { name, email, nickname, age }) => {
    return new Promise((resolve) => {
      const updatedUser = { id: oldUser.id, name, email, age, nickname };

      users = users.map((user) => {
        if (user.id === oldUser.id) {
          return updatedUser;
        } else {
          return user;
        }
      });

      resolve(updatedUser);
    });
  };

  const destroy = (id) => {
    return new Promise((resolve) => {
      users = users.filter((user) => user.id !== id);
      resolve(true);
    });
  };

  return { index, get, create, update, destroy };
})();
