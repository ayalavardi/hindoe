const City = require('../models/city')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const advertiser = require('../models/advertiser')

dotenv.config()

const addCity = (req, res) => {
    console.log(req.body.city);
    advertiser.findOne({ _id: { $eq: req.query.id } })
        .then((advertiser) => {
            if (!advertiser) {
                console.log("לא נמצא מפרסם");
                res.status(404).send({ error: "לא נמצא מפרסם" });
            }
            else {
                console.log("נמצא מפרסם");
                const name = req.body.city;
                console.log("name1 ",req.body);
                console.log("name2 ",name);
                console.log("name3 ",req.body.city);
                City.findOne({ name: { $eq: name } })
                    .then((city) => {
                        console.log(" City.findOne");
                        if (city!=null) {
                            console.log(`City already exists`, city, name);
                            res.status(404).send({ mass: `City already exists` });
                        }
                        else {
                            console.log("else");
                            const newCity = new City({name});
                            console.log(newCity);
                            newCity.save()
                                .then((savedCity) => {
                                    console.log("secc");
                                    res.status(200).send({ message: `Create city ${savedCity} succeed!` });
                                })
                                .catch(() => {
                                    console.log("vffvfvfvfvf");
                                    res.status(404).send({ error: `&{err.message}` });
                                });
                        }
                    })
                    .catch(() => {
                        console.log("catch");
                        res.status(404).send({ error:"lk" });
                    });
            }
        })
        .catch(() => {
            console.log("לא נמצא מפרסם");
            res.status(404).send({ "error": "vg" });
        })
};
const getAllCity = (req, res) => {
    City.find()
        .then((city) => {
            if (!city)
                res.send("citys not found:(")
            else
                res.send(city)
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