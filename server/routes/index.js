const { Router } = require('express');

const usersRouter = require("./users")
const productsRouter = require("./products")
const ordersRouter = require("./orders")

const router = Router()

router.use("/users", usersRouter)
router.use("/products", productsRouter)
router.use("/orders", ordersRouter)


module.exports = router
