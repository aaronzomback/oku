import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from '../App';

// Pass our GraphQL endpoint to uri
const client = new ApolloClient({ 
  uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4001/graphql',
  cache: new InMemoryCache() 
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)