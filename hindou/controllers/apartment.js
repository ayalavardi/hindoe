const Apartment = require('../models/apartment')
const Category = require('../models/category')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const advertiser = require('../models/advertiser')
const city = require('../models/city')
// const category = require('../models/category')

dotenv.config()

const addApartment = (req, res) => {    
    // const { name, desc, img, categoryCode, cityCode, address, numOfBeds, additives, price, advertiserCode } = req.body
    const { name, desc, categoryCode, cityCode, address, numOfBeds, additives, price, advertiserCode } = req.body
    // const { path: img } = req.file
    const {path:img}=req.file
    // const img = req.file 
    // const img = req.file ? req.file.path.replace(/\\/g, '/') : null;
    console.log("img",req.file);

    console.log("2+",img);
const newAp = new Apartment({
    name,
    description: desc,
    image: img,
    categoryCode,
    cityCode,
    address,
    numOfBeds,
    additives:additives.split(','),
    price,
    advertiserCode
});
    newAp.save()
        .then((apart) => {
            Category.findByIdAndUpdate(categoryCode, { $push: { apartments: apart._id } }, { new: true })
                .then(() => {
                    city.findByIdAndUpdate(cityCode, { $push: { apartments: apart._id } }, { new: true })
                        .then(() => {
                            advertiser.findByIdAndUpdate(advertiserCode, { $push: { apartments: apart._id } }, { new: true })
                                .then(() => {
                                    res.status(200).send({ message: `create apartment ${apart._id} succeed!` })
                                })
                        })
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send({ error: err.message, message: `in the aprtmen` })
                })

        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ error: err.message, message: `in the aprtmen after${categoryCode}` })
        })
}
const update = (req, res) => {
    const { name, desc, img, categoryCode, cityCode, address, numOfBeds, additives, price, advertiserCode } = req.body
    const _id = req.params.id
    Apartment.findById(_id)
        .then(apartment => {
            if (apartment.advertiser != req.params.userId) {
                return res.status(400).send({ message: 'Cannot update this apartment!' })
            }
            if (advertiserCode && advertiserCode != apartment.advertiser) {
                return res.status(400).send({ message: `Cannot update apartment's advertiser!` })
            }

            if (cityCode && cityCode != apartment.cityCode) {
                return res.status(400).send({ message: `Cannot update apartment's cityCode!` })
            }

            if (categoryCode != apartment.categoryCode) {
                return Category.findById(categoryCode)
                    .then((category) => {
                        if (!category) {
                            return res.status(404).send({ message: `Category not found!` })
                        }

                        Category.findByIdAndUpdate(apartment.categoryCode, { $pull: { apartment: apart._id } }, { new: true })
                        return Category.findByIdAndUpdate(categoryCode, { $push: { apartments: apart._id } }, { new: true })

                    })
                    .catch((error) => {
                        res.status(500).send({ error: error.message })
                    })
            }

            Apartment.findByIdAndUpdate(_id, req.body, { new: true })
                .then((Apartment) => {
                    res.status(200).send(Apartment)
                })
                .catch((error) => {
                    res.status(404).send({ error: error.message })
                })
        })
        .catch(error => {
            res.status(404).send({ error: error.message })
        })
}
const remove = (req, res) => {
    const { id } = req.params;
    Apartment.findByIdAndDelete(id)
        .then((deletedApartment) => {
            if (!deletedApartment) {
                return res.status(404).send({ error: 'Apartment not found' });
            }
            res.status(200).send(`Apartment ${deletedApartment._id} deleted successfully`);
        })
        .catch((error) => {
            res.status(500).send({ error: error.message });
        });
    // console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
    // Apartment.findByIdAndDelete(req.params.id)
    //     .then((apartment) => {
    //         if (!apartment) {
    //             return res.status(404).send({ message: `apartment not found!` })
    //         }
    //         Category.findByIdAndUpdate(apartment.categoryCode, { $pull: { apartments: apartment._id } }, { new: true })
    //         city.findByIdAndUpdate(apartment.cityCode, { $pull: { apartments: apartment._id } }, { new: true })
    //         advertiser.findByIdAndUpdate(apartment.advertiserCode, { $pull: { apartments: apartment._id } }, { new: true })
    //         return Apartment.deleteMany({ _id: apartment._id })
    //     })
    //     .then(() => {
    //         res.status(200).send(`Delete apartment ${req.params.id} succeed`)
    //     })
    //     .catch((error) => {
    //         res.status(404).send({ error: error.message })
    //     })
}
const getAllApartments = (req, res) => {
    Apartment.find()
        .populate({
            path: 'cityCode',
            select: 'name',
            strictPopulate: false
        }).populate({
            path: 'categoryCode',
            select: 'name',
            strictPopulate: false
        })
        .populate({
            path: 'advertiserCode',
            select: 'email AnotherPhone phone'
        })
        .then((apartment) => {
            if (!apartment)
                res.send("apartment not found:(")
            res.send({ apartment })
        })
        .catch((error) => {
            res.status(400).send(error.message)
        })
}
const getById = (req, res) => {

    Apartment.findById({ _id: req.params.id })
        .populate({
            path: 'cityCode',
            select: 'name',
            strictPopulate: false
        }).populate({
            path: 'categoryCode',
            select: 'name',
            strictPopulate: false
        })
        .populate({
            path: 'advertiserCode',
            select: 'email AnotherPhone phone'
        })
        .then(apartment => {
            if (!apartment) {
                return res.status(404).json({ message: `apartment not found! ?` })
            }
            res.status(200).send(apartment)
        })
        .catch(() => {
            res.status(404).json({ message: `apartment not found!` })
        })
}
const getByCategoryId = (req, res) => {

    Apartment.find({ cityCode: req.body.cityCode })
        .populate({
            path: 'cityCode',
            select: 'name',
            strictPopulate: false
        }).populate({
            path: 'categoryCode',
            select: 'name',
            strictPopulate: false
        })
        .populate({
            path: 'advertiserCode',
            select: 'email AnotherPhone phone'
        })
        .then(apartment => {
            if (!apartment) {
                return res.status(404).json({ message: `apartment not found!Category?` })
            }
            res.status(200).send(apartment)
        })
        .catch(() => {
            res.status(404).json({ message: `apartment not found!Category` })
        })
    // Category.findById({ _id: req.params.categoryCode })
    //     .populate({
    //         path: 'apartment',
    //         select: 'apartments'
    //     })
}
const getByCity = (req, res) => {
    Apartment.find({ cityCode: req.body.cityCode })
        .populate({
            path: 'cityCode',
            select: 'name',
            strictPopulate: false
        }).populate({
            path: 'categoryCode',
            select: 'name',
            strictPopulate: false
        })
        .populate({
            path: 'advertiserCode',
            select: 'email AnotherPhone phone'
        })
        .then(apartment => {
            if (!apartment) {
                return res.status(404).json({ message: `apartment not found!Category?` })
            }
            res.status(200).send(apartment)
        })
        .catch(() => {
            res.status(404).json({ message: `apartment not found!Category` })
        })

    // city.findById({ _id: req.params.cityCode }).populate({ path: 'apartment', select: 'apartments' })
    //     .then(apartment => {
    //         if (!apartment) {
    //             return res.status(404).json({ message: `apartment not found!` })
    //         }
    //         res.status(200).send(apartment)
    //     })
    //     .catch(() => {
    //         res.status(404).json({ message: `User not found!` })
    //     })
}
const getByadId = (req, res) => {
    // advertiser.findById({ _id: req.params.advertiserCode }).populate({ path: 'apartment', select: 'apartments' })
    Apartment.find({ advertiserCode: req.body.advertiserCode })
        .populate({
            path: 'cityCode',
            select: 'name',
            strictPopulate: false
        }).populate({
            path: 'categoryCode',
            select: 'name',
            strictPopulate: false
        })
        .populate({
            path: 'advertiserCode',
            select: 'email AnotherPhone phone'
        })
        .then(apartment => {
            if (!apartment) {
                return res.status(404).json({ message: `apartment not found!Category?` })
            }
            res.status(200).send(apartment)
        })
        .catch(() => {
            res.status(404).json({ message: `apartment not found!Category` })
        })
    // .then(apartment => {
    //     if (!apartment) {
    //         return res.status(404).json({ message: `apartment not found!` })
    //     }
    //     res.status(200).send(apartment)
    // })
    // .catch(() => {
    //     res.status(404).json({ message: `User not found!` })
    // })
}
const getByNumBads = (req, res) => {
    //אולי נכון לכתוב שאילתה יותר יפה
    Apartment.find().where({ numOfBeds: req.body.numOfBeds })
        .populate({
            path: 'cityCode',
            select: 'name',
            strictPopulate: false
        }).populate({
            path: 'categoryCode',
            select: 'name',
            strictPopulate: false
        })
        .populate({
            path: 'advertiserCode',
            select: 'email AnotherPhone phone'
        })
        .then(apartment => {
            if (!apartment) {
                return res.status(404).json({ message: `apartment not found!Category?` })
            }
            res.status(200).send(apartment)
        })
        .catch(() => {
            res.status(404).json({ message: `apartment not found!Category` })
        })
    // .then(apartment => {
    //     if (!apartment) {
    //         return res.status(404).json({ message: `apartment not found!` })
    //     }
    //     res.status(200).send(apartment)
    // })
    // .catch(() => {
    //     res.status(404).json({ message: `User not found!` })
    // })
}
const getByPrice = (req, res) => {
    Apartment.find().where({ price: { $lt: req.body.price } })
        .populate({
            path: 'cityCode',
            select: 'name',
            strictPopulate: false
        }).populate({
            path: 'categoryCode',
            select: 'name',
            strictPopulate: false
        })
        .populate({
            path: 'advertiserCode',
            select: 'email AnotherPhone phone'
        })
        .then(apartment => {
            if (!apartment) {
                return res.status(404).json({ message: `apartment not found!Category?` })
            }
            res.status(200).send(apartment)
        })
        .catch(() => {
            res.status(404).json({ message: `apartment not found!Category` })
        })
    // .then(apartment => {
    //     if (!apartment) {
    //         return res.status(404).json({ message: `apartment not found!` })
    //     }
    //     res.status(200).send(apartment)
    // })
    // .catch(() => {
    //     res.status(404).json({ message: `User not found!` })
    // })
}
module.exports = { addApartment, update, remove, getAllApartments, getById, getByCategoryId, getByCity, getByadId, getByNumBads, getByPrice }