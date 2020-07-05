const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    deleted_at: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('todo', TodoSchema);