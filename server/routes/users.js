const { Router } = require('express');
const ExampleController = require('../controller/ExampleController');
const router = Router()

router.get('/', ExampleController.getAllExamples)
router.get('/:id', ExampleController.getUserId)

module.exports = router