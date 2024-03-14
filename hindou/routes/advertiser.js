const express = require('express')

const router = express.Router()

// const { checkAuth, upload } = require('../middlewares')

const {
    advertisersignal,
    advertiserLogin,
    getAdvertisers
} = require('../controllers/advertiser')

router.get('/', getAdvertisers)

router.post('/Login', advertiserLogin)
router.post('/signal', advertisersignal)

module.exports = router