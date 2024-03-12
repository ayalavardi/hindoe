const mongoose = require('mongoose')

const advertiserSchema = mongoose.Schema({
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
        require: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
    },
    AnotherPhone: {
        type: String
    },
    apartments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'apartment'
        }
    ]
})


module.exports = mongoose.model('advertiser', advertiserSchema)