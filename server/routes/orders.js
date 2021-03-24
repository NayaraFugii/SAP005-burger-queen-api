const { Router } = require('express');
const OrdersController = require('../controller/OrdersController')
const router = Router()

router.get('/', OrdersController.getAllOrders)
router.get('/:orderID', OrdersController.getOrderById)
router.put('/:orderID', OrdersController.updateOrder)
router.delete('/:orderID', OrdersController.deleteOrder)
router.post('/create-order', OrdersController.createOrder)

module.exports = router