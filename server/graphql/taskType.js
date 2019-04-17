const graphql =  require('graphql');

const {GraphQLObjectType,GraphQLString} = graphql;

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        _id: {type: GraphQLString},
        title: {type: GraphQLString},
        description: {type: GraphQLString}
    })
});

module.exports = TaskType;