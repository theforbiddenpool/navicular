const UserService = require('../services/user');

async function signUp(req, res, next) {
  try {
    await UserService.createUser(req.body);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function edit(req, res, next) {
  try {
    await UserService.editUser({ id: req.params.id, ...req.body });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function find(req, res, next) {
  try {
    const user = await UserService.getUser(req.query);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await UserService.deleteUser({ id: req.params.id });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  signUp, edit, find, remove,
};
