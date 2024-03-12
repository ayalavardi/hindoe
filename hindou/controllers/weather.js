const User = require("../models/user")
const Weather = require('../models/weather')
const kelvinToCelsius = require('kelvin-to-celsius')

const dotenv = require('dotenv')
dotenv.config()
const request = require('request')

// async - await
// js - async
// try - catch
// promise: then - catch
// subscribe

// const a = new Promise((resolve, reject) => {
//     let x = Math.random() * 99 + 1
//     let y = Math.random() * 99 + 1
//     if (x > y) {
//         resolve(x)
//     }
//     else {
//         reject(y)
//     }
// })

// a()
//     .then(s => console.log({ success: s }))
//     .catch(e => console.log({ error: e }))

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

    requestApi()
        .then((body) => {
            const apiParameters = JSON.parse(body)
            const newWeather = new Weather({
                city: apiParameters.name,
                weather: apiParameters.weather.main,
                description: apiParameters.weather.description,
                temp: kelvinToCelsius(apiParameters.main.temp),
                temp_min: kelvinToCelsius(apiParameters.main.temp_min),
                temp_max: kelvinToCelsius(apiParameters.main.temp_max),
                user: req.params.userId
            })
            newWeather.save()
                .then((weather) => {
                    User.findByIdAndUpdate({ _id: req.params.userId }, { $push: { 'weathers': weather._id } }, { new: true })
                        .then((user) => {
                            res.status(200).send({ weather })
                        })
                        .catch((error) => {
                            res.status(400).send(error.message)
                        })
                })
                .catch((error) => {
                    res.status(400).send(error.message)
                })
        })
        .catch((error) => {
            res.status(400).send(error.message)
        })
}

const getAllWeathersById = (req, res) => {
    User.findById(req.params.id)
        .populate({ path: 'weathers', select: 'city weather description temp temp_min temp_max' })
        .then((user) => {
            res.status(200).send(user.weathers)
        })
        .catch((error) => {
            res.status(400).send(error.message)
        })
}

const deleteWeatherByUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.userId }, { $pull: { 'weathers': req.params.weatherId } }, { new: true })
        .then(() => {
            Weather.findByIdAndDelete({ _id: req.params.weatherId })
                .then(() => {
                    res.status(200).send('delete weather succeed')
                })
                .catch((error) => {
                    res.status(400).send(error.message)
                })
        })
        .catch((error) => {
            res.status(400).send(error.message)
        })
}

module.exports = { getWeather, getAllWeathersById, deleteWeatherByUser }