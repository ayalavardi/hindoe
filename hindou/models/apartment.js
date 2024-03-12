const mongoose = require('mongoose')

const apartmentSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String,
        require: true,

    },
    image: {
        type: String,
        require: true,
    },
    categoryCode:{
        type: mongoose.Types.ObjectId,
        ref: 'category',
        require: true,

    },
    cityCode:{
        type: mongoose.Types.ObjectId,
        ref: 'city',
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    numOfBeds:{
        type: Number,
        require: true,
    },
    additives:[
        {
            type: String
        }
    ],
    price:{
        type:Number,
        require: true,
    },
    advertiserCode:{
        type: mongoose.Types.ObjectId,
        ref: 'advertiser',
        require: true,
    }
   
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

module.exports = mongoose.model('apartment', apartmentSchema)