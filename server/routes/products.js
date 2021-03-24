const { Router } = require('express');
const ProductsController = require('../controller/ProductsController')
const router = Router()

router.get('/', ProductsController.getAllProducts)
router.get('/:productID', ProductsController.getProductById)
router.put('/:productID', ProductsController.updateProduct)
router.delete('/:productID', ProductsController.deleteProduct)
router.post('/create-product', ProductsController.createProduct)

module.exports = router