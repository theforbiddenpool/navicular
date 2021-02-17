const router = require('express').Router();
const UserController = require('../controllers/user');

router.patch('/:id', UserController.edit);
router.get('/', UserController.find);
router.delete('/:id', UserController.remove);

module.exports = router;
