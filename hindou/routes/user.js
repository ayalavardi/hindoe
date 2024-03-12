const express = require('express')

const router = express.Router()

// const { checkAuth, upload } = require('../middlewares')

const {
    usersignal,
     userLogin
} = require('../controllers/user')

router.post('/Login/', userLogin)
router.post('/signal/', usersignal)
module.exports = router