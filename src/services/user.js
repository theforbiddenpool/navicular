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

module.exports = { createUser };
