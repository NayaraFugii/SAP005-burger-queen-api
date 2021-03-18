const { Router } = require('express');
const ExampleController = require('../controller/ExampleController');
const router = Router()

router.get('/', ExampleController.getAllUsers)
router.get('/:id', ExampleController.getUserId)
router.post('/:id', ExampleController.newUsers)

module.exports = router