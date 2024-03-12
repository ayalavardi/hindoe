const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String
    },
    apartments:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'apartment'
        }
    ]
    
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

module.exports = mongoose.model('category', categorySchema)