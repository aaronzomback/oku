import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import App from '../App.js'


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
});

// our GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:4001/graphql'
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
            line1
            line2
            line3
          }
          id
        }
      }
    `
  })
  .then(result => console.log(result));



export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);