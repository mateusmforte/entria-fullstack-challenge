const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String
})

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task;
