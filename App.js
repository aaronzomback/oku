import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import HomeScreen from './pages/HomeScreen'
import CreateScreen from './pages/CreateScreen'
import { screenOptions } from './assets/styles'


const Stack = createStackNavigator()


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
            content
          }
          id
        }
      }
    `
  })
  .then(result => console.log(result));


export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'OKU' }}
          />
          <Stack.Screen
            name="CreateScreen"
            component={CreateScreen}
            options={({
              route: {
                params: {
                  chapter: { number, title },
                },
              },
            }) => ({
              title: number ? `Chapter ${number}: ${title}` : title,
              gestureResponseDistance: { horizontal: 500 },
            })}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##F2F4F7',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#60BADA'
  },
});
