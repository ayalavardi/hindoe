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
                    console.log("bad");
                }
                else {
                    const token = jwt.sign({ email, password }, process.env.TOKEN, {
                        expiresIn: '1H'
                    })
                    // שליחת הצופן לצד שרת בכניסה למערכת
                    res.status(200).send({ message: 'login succeefull!', advertiser, token })
                    console.log("ok");
                }
            })
        })
        .catch(error => {
            res.status(404).send({ error: error.message })
        })
}
module.exports = { advertisersignal, advertiserLogin }