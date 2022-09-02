
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    phone: Number,
    gender: String,
    email: String,
})

module.exports = mongoose.model('Student', studentSchema);