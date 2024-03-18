const advertiser = require('../models/advertiser')

const nodemailer = require('nodemailer')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const dotenv = require('dotenv')
dotenv.config()

const advertisersignal = (req, res) => {
    const { name, email, password } = req.body
    const token = jwt.sign(
        { name: req.body.name, password: req.body.password },
        process.env.TOKEN)
    advertiser.findOne({ email: { $eq: email } })
        .then((advertiser) => {
            if (advertiser)
                res.status(404).send({ mass: `email has been exist` })
        })
    const newadvertiser = new advertiser(req.body)
    bcrypt.hash(password, 10, (error, hash) => {
        if (error)
            return res.status(500).send({ error: error.message })
        newadvertiser.password = hash
        return newadvertiser.save().then((advertiser) => {
            res.status(200).send({ message: `create article ${newadvertiser.name} succeed!${newadvertiser.password}`, advertiser: advertiser })
        })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    })
}
const advertiserLogin = (req, res) => {
    const { password, email } = req.body
    console.log("hii");
    advertiser.findOne({ email: { $eq: email } })
        .then(advertiser => {
            bcrypt.compare(password, advertiser.password, (error, result) => {
                if (error || !result) {
                    return res.status(500).send({ error: 'Email and password are not matches!', result })
                }
                else {
                    const token = jwt.sign({ email, password }, process.env.TOKEN, {
                        expiresIn: '1H'
                    })
                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'hindoe.ap@gmail.com',
                            pass: 'zaun khng yfvz qdjq'
                        }
                    });
                    let mailOptions = {
                        from: 'hindoe.ap@gmail.com',
                        to: advertiser.email,
                        subject: 'Hi, ' + advertiser.name,
                        html: `
                    <html>
                        <head>
                        <style>
                        body {
                            background-color: #f4f4f4;
                            font-family: Arial, sans-serif;
                        }
                
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            border: 1px solid #ccc;
                            border-radius: 10px;
                            background-color: #fff;
                            text-align: center;
                        }
                
                        h1 {
                            color: #333;
                        }
                
                        h5 {
                            color: #555;
                        } 
                        p {
                            color: #555;
                        }
                
                        img {
                            max-width: 100%;
                            height: auto;
                            margin-top: 20px;
                        }
                    </style>
                </head>
                
                <body>
                    <div class="container">
                        <h1>Welcome to our site!</h1>
                        <p>Your registration was successful.</p>
                        <h5>We at <h1>hindoe</h1> wish you lots of fun and hope for many years</h5>
                        <img src="https://d3m9l0v76dty0.cloudfront.net/system/photos/7440126/large/65a39b945ab2234a3dc3d2c85b6e0bb4.jpg" alt="Welcome Image">
                        <div>
                            </body>
                    </html>
                `                };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });

                    res.status(200).send({ message: 'login succeefull!', advertiser, token })
                    console.log("ok");
                }
            })
        })
        .catch(error => {
            res.status(404).send({ error: error.message })
        })
}
const getAdvertisers = (req, res) => {
    advertiser.find()
        .then((advertiser) => {
            if (!advertiser)
                res.send("advertisers not found:(")
            else
                res.status(200).send({ message: 'getAdvertisers succeefull!', advertiser: advertiser })
        })
        .catch((error) => {
            res.status(400).send(error.message)
        })
}
module.exports = { advertisersignal, advertiserLogin, getAdvertisers }