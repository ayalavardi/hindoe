const City = require('../models/city')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const advertiser = require('../models/advertiser')
const coffee = async (req, res) => {
    const city = req.params.city;
    try {
        console.log("1");
        const coffeeData = await getCoffeeInArea(city);
        res.json(coffeeData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
// https://api.foursquare.com/v3/places/search?query=coffee&near=%D7%91%D7%99%D7%AA%20%D7%9C%D7%97%D7%9D
const getCoffeeInArea = async (city) => {
    const apiKey = 'fsq30rNsSO/RDTY+uevVfikddXPhzsIDQEgoBd+ojHLlwcQ=';
    const baseUrl = 'https://api.foursquare.com/v2/venues/search';

    const params = {
        client_id: apiKey,
        client_secret: apiKey,
        v: '20220301',
        near: city,
        query: 'coffee'
    };

    try {
        console.log("2");
        const response = await axios.get(baseUrl, { params });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch coffee data');
    }
};







// dotenv.config()

// // const sdk = require('api')('@fsq-developer/v1.0#lkuau2ylt7r4v55');

// // sdk.auth('fsq30rNsSO/RDTY+uevVfikddXPhzsIDQEgoBd+ojHLlwcQ=');
// // sdk.placeSearch({query: 'coffee', near: '%D7%91%D7%99%D7%AA%20%D7%9C%D7%97%D7%9D'})
// //   .then(({ data }) => console.log(data))
// //   .catch(err => console.error(err));

// const getWeather = (req, res) => {
//     const requestApi = () => {
//         return new Promise((resolve, reject) => {
//             request(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city},&appid=29e21eb08b02f857be9490804657ae5c`,
//                 (err, res, body) => {
//                     if (err)
//                         reject(err)
//                     else
//                         resolve(body)
//                 })
//         })
//     }
// }


// const apiKey = 'המפתח_שלך';
// const baseUrl = 'https://api.foursquare.com/v2/venues/search';

// const params = {
//     client_id: apiKey,
//     client_secret: apiKey,
//     v: '20220301', // גרסה של API
//     near: 'בית לחם', // עיר או מקום אחר
//     query: 'coffee' // מילת חיפוש
// };

// // axios.get(baseUrl, { params })
// //     .then(response => {
// //         console.log(response.data.response.venues);
// //     })
// //     .catch(error => {
// //         console.error('Error:', error);
// //     });
// //---------------------------------------------------//
// const getcoffeetearea = (req, res) => {
//     const apiKey = 'fsq30rNsSO/RDTY+uevVfikddXPhzsIDQEgoBd+ojHLlwcQ=';
//     const baseUrl = 'https://api.foursquare.com/v2/venues/search';
//     const near = req.params.city
//     const params = {
//         client_id: apiKey,
//         client_secret: apiKey,
//         v: '20220301', // גרסה של API
//         near: near, // עיר או מקום אחר
//         query: 'coffee' // מילת חיפוש
//     };
//     const requestApi = () => {
//         return new Promise((resolve, reject) => {
//             request(baseUrl, { params },
//                 (err, res, body) => {
//                     if (err)
//                         reject(err)
//                     else
//                         resolve(body)
//                         // res.status(200).send({body});
//                 })
//         })
//     }
// }
module.exports = {coffee}