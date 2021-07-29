const { ApolloServer } = require('apollo-server');
// const { OGM } = require("@neo4j/graphql-ogm");

const gql = require('graphql-tag');

require('dotenv').config();

const { driver } = require('./config.js');

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => 'Hello world!'
  }
};

// const ogm = new OGM({
//   typeDefs,
//   driver,
//   });

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

const PORT = process.env.port;

server.listen(PORT).then((res) => {
  console.log(`Server is up & away at 🚀 ${res.url}`)
});