const express = require('express')

const router = express.Router()

const { checkAuth} = require('../middlewares')

const {
    getAllWeathersByIdAtDay,
    getAllCity,
    getAllWeathersById,
    addCity
} = require('../controllers/city')

router.get('/', getAllCity)
router.get('/getAllWeathersByIdAtDay/:id', getAllWeathersByIdAtDay)
router.get('/getAllWeathersById/:id', getAllWeathersById)
router.post('/', checkAuth,addCity)
module.exports = router