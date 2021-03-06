const {GraphQLObjectType,GraphQLString,GraphQLID} = require('graphql');

const TaskType = new GraphQLObjectType({
    name:'tasks',
    fields: {
        _id: {type: GraphQLID},
        title: { type: GraphQLString},
        description: {type: GraphQLString}
    }   
});

module.exports = TaskType;
    