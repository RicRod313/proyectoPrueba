const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isChecked: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        required: true,
    }
});

taskSchema

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;