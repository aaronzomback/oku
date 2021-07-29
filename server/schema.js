const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// i.e. Customer Type
const CustomerType = new GraphQLObjectType({
  name:'Customer',
  fields: () => ({
    id: {type:GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
})

const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  customer:{
    // just an example for now
    type:CustomerType
  }
})

module.exports = new GraphQLSchema({

});