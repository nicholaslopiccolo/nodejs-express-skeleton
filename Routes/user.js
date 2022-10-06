let express = require('express');
let router = express.Router();
let userService = require('../Services/user.service');

router.post('/', userService.someSyncFun)
router.post('/async', userService.someAsyncFun)

module.exports = router