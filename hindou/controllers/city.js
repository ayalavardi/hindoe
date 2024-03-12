const City = require('../models/city')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const advertiser = require('../models/advertiser')

dotenv.config()

const addCity = (req, res) => {
    advertiser.findOne({ _id: { $eq: req.query.id } })
        .then((advertiser) => {
            if (advertiser) {
                res.status(404).send({ mass: `Advertiser already exists` });
            } else {
                const { name } = req.body;
                City.findOne({ name: { $eq: name } })
                    .then((city) => {
                        if (city) {
                            res.status(404).send({ mass: `City already exists` });
                        } else {
                            const newCity = new City(req.body);
                            newCity.save()
                                .then((savedCity) => {
                                    res.status(200).send({ message: `Create city ${savedCity.name} succeed!` });
                                })
                                .catch((err) => {
                                    res.status(404).send({ error: err.message });
                                });
                        }
                    })
                    .catch((err) => {
                        res.status(404).send({ error: err.message });
                    });
            }
        })
        .catch((err) => {
            res.status(404).send({ error: err.message });
        });
};

const getAllCity = (req, res) => {
    City.find()
        .then((city) => {
            if (!city)
                res.send("citys not found:(")
            else
            res.send( city )
        })
        .catch((error) => {
            res.status(400).send(error.message)
        })
}
const getWeather = (req, res) => {
    const requestApi = () => {
        return new Promise((resolve, reject) => {
            request(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city},&appid=29e21eb08b02f857be9490804657ae5c`,
                (err, res, body) => {
                    if (err)
                        reject(err)
                    else
                        resolve(body)
                })
        })
    }
}

const getAllWeathersById = (req, res) => {
    City.findById(req.params.id)
        .then((city) => {
            if (!city)
                res.status(404).send('city not found')
            // const requestApi = () => {
            return new Promise((resolve, reject) => {
                request(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city},&appid=29e21eb08b02f857be9490804657ae5c`,
                    (err, res, body) => {
                        if (err)
                            reject(err)
                        else
                            resolve(body)
                    })
            })
        }
            // }
        )
        .catch((error) => {
            res.status(400).send(error.message)
        })
}
const getAllWeathersByIdAtDay = (req, res) => {
    City.findById(req.params.id)
        .then((city) => {
            if (!city)
                res.status(404).send('city not found')
            // const requestApi = () => {
            return new Promise((resolve, reject) => {
                request(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city},&appid=29e21eb08b02f857be9490804657ae5c`,
                    (err, res, body) => {
                        if (err)
                            reject(err)
                        else
                            resolve(body)
                    })
            })
        }
            // }
        )
        .catch((error) => {
            res.status(400).send(error.message)
        })
}


module.exports = { addCity, getAllWeathersById, getAllWeathersByIdAtDay, getAllCity }