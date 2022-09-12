
const mongoose = require('mongoose');

const statetSchema = new mongoose.Schema({
    state: String,
})


















module.exports = mongoose.model('State', statetSchema);