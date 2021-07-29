const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer } = require('apollo-server');
// const { OGM } = require("@neo4j/graphql-ogm");

const gql = require('graphql-tag');

require('dotenv').config();

const { driver } = require('./config.js');


const typeDefs = `
    type Movie {
        title: String
        year: Int
        imdbRating: Float
        genres: [Genre] @relationship(type: "IN_GENRE", direction: OUT)
    }

    type Genre {
        name: String
        movies: [Movie] @relationship(type: "IN_GENRE", direction: IN)
    }
`;

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

  const server = new ApolloServer({
    schema: neoSchema.schema,
    context: { driver }
  });

const PORT = process.env.port;

server.listen(PORT).then((res) => {
  console.log(`Server is up & away at 🚀 ${res.url}`)
});