const Category = require('../models/category')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const Advertiser = require('../models/advertiser')
const category = require('../models/category')

dotenv.config()

// const addCtegory = (req, res) => {
//     debugger
//     const { name } = req.body
//     Advertiser.findOne({ _id: { $eq: req.query.id } })
//         .then((Advertiser) => {
//             if (!Advertiser)
//                 res.status(404).send({ mass: `Advertiser not found` })
//         })
//     Category.findOne({ name: { $eq: name } })
//         .then((ctegory) => {
//             if (ctegory)
//                 res.status(404).send({ mass: `ctegory has been exist` })
//         })
//     const newctegory = new Category(req.body)
//     newctegory.save()
//         .then((ctegory) => {
//             res.status(200).send({ message: `create ctegory ${ctegory.name} succeed!` })
//         })
//         .catch((err) => {
//             res.status(404).send({ error: err.message })
//         })
// }

const addCategory = (req, res) => {
    console.log("1");

    Advertiser.findOne({ _id: { $eq: req.query.id } })
        .then((advertiser) => {
            if (!advertiser) {
                res.status(404).send({ mass: `Advertiser has not been found` });
            } else {
                const { name } = req.body;
                Category.findOne({ name: { $eq: name } })
                    .then((category) => {
                        if (category) {
                            res.status(404).send({ mass: `Category already exists` });
                        } else {
                            const newCategory = new Category(req.body);
                            console.log("3.5");

                            newCategory.save()
                                .then((savedCategory) => {
                                    console.log("3", savedCategory);
                                    res.status(200).send({ message: `Category ${savedCategory.name} created successfully!` });
                                })
                                .catch((err) => {
                                    console.log("4", err);
                                    res.status(404).send({ error: err.message });
                                });
                        }
                    })
                    .catch((err) => {
                        console.log("2", err);
                        res.status(404).send({ error: err.message });
                    });
            }
        })
        .catch((err) => {
            console.log("1", err);
            res.status(404).send({ error: err.message });
        });
};

const getAllCategory = (req, res) => {
    Category.find()
        .then((Category) => {
            if (!Category)
                res.send("Categorys not found:(")
            res.send( Category )
        })
        .catch((error) => {
            res.status(400).send(error.message)
        })
}

module.exports = { addCategory, getAllCategory }