
const mongoose = require('mongoose');

const countrytSchema = new mongoose.Schema({
    country: String,
})


















module.exports = mongoose.model('Country', countrytSchema);