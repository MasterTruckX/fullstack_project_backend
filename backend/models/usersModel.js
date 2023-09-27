const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please, write-down your name.']
    },
    email: {
        type: String,
        required: [true, 'Please, write-down yor email.'],
        unique: true
    },
    password: {
        type: String,
        requiered: [true, 'Please, write-down your password.']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)