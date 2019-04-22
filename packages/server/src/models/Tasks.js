const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const tasksSchema= new Schema({
    _id :{
        type: ObjectId,
        required:'id is required and unique!'
    },
    title: {
        type: String
    },
    description:{
        type: String
    }
});

module.exports =  mongoose.model('Tasks',tasksSchema);