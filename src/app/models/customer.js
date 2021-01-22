const mongoose = require('../../database')
const bcrypt = require('bcryptjs')

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    address: {
        type: [],
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Project = mongoose.model('Customer', CustomerSchema)

module.exports = Project