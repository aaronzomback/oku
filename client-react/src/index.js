import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

// our GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:4001/graphql"
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

// Pass our GraphQL endpoint & error links to ApolloClient API
const client = new ApolloClient({ 
  link,
  cache: new InMemoryCache() 
});

client
  .query({
    query: gql`
      {
        users {
          name
          username
          email
          password
          haikus {
            content
          }
          id
        }
      }
    `
  })
  .then(result => console.log(result));


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);