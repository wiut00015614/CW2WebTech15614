const express = require('express');
const router = express.Router();
const users_controller = require('../../controllers/users');

// localhost:3000/ (GET request)
router.get('/', users_controller.index);
router.get('/add', users_controller.add);
router.get('/update', users_controller.update);

module.exports = router;