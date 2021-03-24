const { Router } = require('express');
const UsersController = require('../controller/UsersController')
const router = Router()

router.get('/', UsersController.getAllUsers)
router.get('/:userID', UsersController.getUserById)
router.put('/:userID', UsersController.updateUser)
router.delete('/:userID', UsersController.deleteUser)
router.post('/create-user', UsersController.createUser)

module.exports = router