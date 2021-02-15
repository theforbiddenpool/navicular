const UserService = require('../services/user');

async function signUp(req, res, next) {
  try {
    await UserService.createUser(req.body);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { signUp };
