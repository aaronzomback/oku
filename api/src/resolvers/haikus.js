const { driver } = require()


const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("admin", "password")
);

const ogm = new OGM({ typeDefs, driver });
