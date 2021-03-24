const { Router } = require('express');
const { authToken } = require('../middlewares/auth')

const usersRouter = require("./users")
const productsRouter = require("./products")
const ordersRouter = require("./orders")

const router = Router()

router.use("/users", usersRouter)
router.use("/products", authToken, productsRouter)
router.use("/orders", authToken, ordersRouter)


module.exports = router
