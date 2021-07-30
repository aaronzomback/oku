import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import App from '../App.js'

const httplink = createHttpLink({
  uri: 'http://localhost:5000'
})
 
// Pass our GraphQL endpoint to uri
const client = new ApolloClient({ 
  uri: `${httplink}/graphql`,
  cache: new InMemoryCache() 
});
 

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)