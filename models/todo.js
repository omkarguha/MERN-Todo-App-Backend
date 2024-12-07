const {Schema, model}= require('mongoose');

const todoSchema = new Schema({
    text: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = model('todo', todoSchema);