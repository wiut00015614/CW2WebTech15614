const express = require('express')
const users_router = require('./users')

const router = express.Router()

// registering child routers
router.use('/', users_router)
module.exports = router
