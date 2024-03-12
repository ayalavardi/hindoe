const express = require('express')

const router = express.Router()
const {
    coffee
} = require('../controllers/citiesfromfour')

router.get('/', coffee)
module.exports = router