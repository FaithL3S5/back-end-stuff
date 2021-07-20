const { boolean } = require('@hapi/joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    country: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    ETA: {
        type: Date,
        default: Date.now
    },
    arrival: {
        type: Boolean,
        required: true,
        min: 6,
        max: 1024
    },
    attribute: {
        type: Array,
        required: true
    }
});


module.exports = mongoose.model('User', userSchema);