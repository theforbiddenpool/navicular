const { Op } = require('sequelize');
const { User } = require('../db').models;
const HttpError = require('../utils/HttpError');

async function createUser({ username }) {
  const user = await User.findOne({
    where: {
      username,
    },
  });
  if (user && user.username === username) throw new HttpError(409, 'Username already exists');
  await User.create({ username });
}

async function getUser(query) {
  const user = await User.findOne({
    where: {
      [Op.or]: { ...query },
    },
  });
  if (!user) throw new HttpError(404, 'User doesn\'t exist');
  return user;
}

async function editUser({ id, ...body }) {
  await User.update({ ...body }, {
    where: {
      id,
    },
  });
}

async function deleteUser({ id }) {
  await User.destroy({ where: { id } });
}

module.exports = {
  createUser, editUser, getUser, deleteUser,
};
