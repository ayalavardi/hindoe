const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    name: {
        type: String
    },
    apartments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'apartment'
        }
    ]
   
})

module.exports = mongoose.model('city', citySchema)