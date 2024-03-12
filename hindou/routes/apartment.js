const express = require('express')

const router = express.Router()

const {  upload } = require('../middlewares')
const { checkAuth  } = require('../middlewares')

const {
    addApartment,
     update,
     remove,
     getAllApartments,
     getById,
     getByCategoryId,
     getByCity,
     getByadId,
     getByNumBads,
     getByPrice 
} = require('../controllers/apartment')

router.get('/getAllApartments', getAllApartments)
router.get('/getById/:id', getById)
router.get('/byCategory/',getByCategoryId)//:categoryCode
router.get('/byCity/', getByCity)//:cityCode
router.get('/byAdvertiser/', getByadId)//:advertiserCode
router.get('/byNumOfBeds/', getByNumBads)//:numOfBeds
router.get('/byPrice/', getByPrice)//:price
router.post('/',checkAuth,upload.single('img'),addApartment)
router.patch('/update/:id',checkAuth, update)
            
router.delete('/:id',checkAuth, remove)
module.exports = router