const {GraphQLSchema,GraphQLObjectType,GraphQLList,GraphQLID} = require('graphql');
const tasksType = require('./types/tasksType');
const Tasks = require ('./models/Tasks');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        task: {
            type: tasksType,
            args: {
                id:{
                    type: GraphQLID
                }
            },
            resolve(parent,args){
                return Tasks.findById(args.id);
            }
        },
        tasks: {
            type: new GraphQLList(tasksType),
            resolve(parent,args){
                return Tasks.find({})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});