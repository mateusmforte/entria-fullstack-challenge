const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tasksSchema= new Schema({
    id :{
        type: String,
        required:'id is required!'
    },
    title: {
        type: String
    },
    description:{
        type: String
    }
});

module.exports =  mongoose.model('Task',tasksSchema);