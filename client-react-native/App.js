import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import HomeScreen from './screens/HomeScreen'
import CreateScreen from './screens/CreateScreen'
import FeedScreen from './screens/FeedScreen';
import WordOfDay from './screens/WordOfDayScreen';
import { screenOptions } from './assets/styles'
import { fetchRequest } from './services/ApiClient';





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


export default function App() {

  const [ words, setWord ] = useState([]);

  useEffect(() => {
      (async () => {
      const words = await fetchRequest()
      console.log(words.definitions[1].text);
      setWord(words) ;
    })()
  }, [])

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
            name="Create"
            component={CreateScreen}
          />
          <Stack.Screen
            name="Feed"
            component={FeedScreen}
          />
          <Stack.Screen 
            name="WordOfDay">{(props) => (<WordOfDay words={words} {...props} />)}
          </Stack.Screen>
          </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#60BADA'
  },
});
