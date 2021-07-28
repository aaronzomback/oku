const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.log(`🚀 server is up and away! http://localhost:${PORT}`)
})