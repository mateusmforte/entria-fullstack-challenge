const {GraphQLSchema,GraphQLObjectType,GraphQLList,GraphQLID} = require('graphql');
const tasksType = require('./types/tasksType');
const Tasks = require ('./models/Tasks');

const getTasks = new GraphQLObjectType({
    name: 'getTasks',
    fields: {
        task: {
            type: tasksType,
            args: {
                _id:{
                    type: GraphQLID
                }
            },
            resolve(parent,args){
                return Tasks.findById(args._id);
            }
        },
        tasks: {
            type: new GraphQLList(tasksType),
            resolve(parent,args){
                return Tasks.find({});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: getTasks
});