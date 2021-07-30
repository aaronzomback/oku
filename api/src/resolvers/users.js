const { OGM } = require("@neo4j/graphql-ogm");
const neo4j = require("neo4j-driver");

const typeDefs = require('../graphql-schema.js')
require('dotenv').config();


const driver = neo4j.driver(
  process.env.NEO4J_URI || "bolt://localhost:7687",
  neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "Reyeswright5")
);

const ogm = new OGM({ typeDefs, driver });

const User = ogm.model("User");
const users = await User.find();
