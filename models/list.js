const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    }
});

const list = mongoose.model('list', listSchema);
module.exports = list;