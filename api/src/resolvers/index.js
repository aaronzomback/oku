const typeDefs = require('./schema/graphql-schema');

const resolvers = {
  User: {
      name(obj) {
          return `${obj.name}`;
      },
  },
};

module.exports = resolvers;