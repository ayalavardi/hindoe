const mongoose = require('mongoose')
// const Weather = require('./city')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    password: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        require: true,
        unique: true

    },

})

// userSchema.pre('deleteOne', function (next) {
//     Weather.deleteMany({ user: this._conditions._id })
//     .then(()=>{
//         next()
//     })
//     .catch((error)=>{
//         res.status(400).send(error.message)
//     })
// })

module.exports = mongoose.model('User', userSchema)