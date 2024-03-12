const express = require('express')

const router = express.Router()

const {
    addCategory,
    getAllCategory
} = require('../controllers/category');
const { checkAuth } = require('../middlewares');

// const { logUrl } = require('../middlewares');

router.use('/', (req, res, next) => {
    console.log('categories router');
    next()
})

router.get('/',checkAuth, getAllCategory)

// router.use('/', logUrl)

router.post('/',checkAuth,addCategory)

module.exports = router