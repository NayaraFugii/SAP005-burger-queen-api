const { Router } = require('express');
const users = require("./users")
const router = Router()

router.use("/products", users)

module.exports = router
