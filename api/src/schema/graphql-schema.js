const fs = require('fs');
const path = require('path');
require('dotenv').config();


const typeDefs = fs
.readFileSync(
  process.env.GRAPHQL_SCHEMA || path.join(__dirname, 'schema.graphql')
  )
  .toString('utf-8')
  
  module.exports = typeDefs;