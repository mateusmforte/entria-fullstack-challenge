const {GraphQLSchema,GraphQLObjectType,GraphQLString} = require('graphql');
const taskGraphQLType = require('./taskType');
const {Task} = require('../models/Tasks');


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        tasks:{
            type:taskGraphQLType,
            args:{_id:{type: GraphQLString}},
            resolve(parent,args){
                return Task.findById(`
                    <a href="http://${args._id}" class="link link-url" target="_blank" rel="external nofollow noopener noreferrer">${args._id}</a>
                `)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});