const User = require('../models/user')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')

dotenv.config()

const usersignal = (req, res) => {

    const { name, email, password } = req.body
    // const token = jwt.sign(
    //     { name: req.body.name, password: req.body.password },
    //     process.env.TOKEN)
    User.findOne({ email: { $eq: email } })
        .then((user) => {
            if (user)
                res.status(404).send({ mass: `email has been exist` })
        })
    const newuser = new User(req.body)
    bcrypt.hash(password, 10, (error, hash) => {
        if (error)
            return res.status(500).send({ error: error.message })
        newuser.password = hash
        return newuser.save().then((user) => {
            res.status(200).send({ message: `create article ${user.name} succeed!${newuser.password}`,user:user })
        })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    })



}
const userLogin = (req, res) => {
    const { email, password } = req.body

    User.findOne({ email: { $eq: email } })
        .then(user => {
            if (!user) {
                return res.status(401).send({ error: 'User not found' });
            }

            console.log("1");
            bcrypt.compare(password, user.password, (error, result) => {
                console.log("11");
                if (error || !result) {
                    return res.status(401).send({ error: 'Email and password do not match!' })
                }
                console.log("2");
                const token = jwt.sign({ email, password }, process.env.TOKEN, {
                    expiresIn: '1H'
                })
                console.log("3");
                res.status(200).send({ message: 'Login successful!', user:user, token })
            })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
            console.log("fffffff");
        });
}

    module.exports = { usersignal, userLogin }