import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, Modal } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import Auth from './screens/Auth';
import FormModal from './containers/FormModal';
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen';
import SignUp from './screens/SignUp'
import CreateScreen from './screens/CreateScreen'
import FeedScreen from './screens/FeedScreen';
import WordOfDay from './screens/WordOfDayScreen';
import MyHaikus from './screens/MyHaikus';
import { screenOptions } from './assets/styles'
import { fetchRequest } from './services/ApiClient';




const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {

  const [ words, setWord ] = useState([]);
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  useEffect(() => {
      (async () => {
      const words = await fetchRequest()
      setWord(words) ;
    })()
  }, [])


  return (
        <MainStack.Navigator initialRouteName="Home">
          <MainStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'OKU' }}
            isAuthenticated={isAuthenticated}
            
          />
          <MainStack.Screen 
            name="SignUp"
            component={SignUp}

          />
          <MainStack.Screen
            name="Create"
            component={CreateScreen}
          />
          <MainStack.Screen
            name="Feed"
            component={FeedScreen} 
          />
          <MainStack.Screen
            name="Landing"
            component={LandingScreen} 
          />
          <MainStack.Screen 
            name="WordOfDay">{(props) => (<WordOfDay words={words} {...props} />)}
            
          </MainStack.Screen>
          <MainStack.Screen 
            name="MyHaikus"
            component={MyHaikus} 
          />
          <MainStack.Screen name="Auth" component={Auth} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}

          />
        </MainStack.Navigator>
  );
};


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
});

{/* our GraphQL API endpoint */}
const httpLink = createHttpLink({
  uri: 'http://localhost:4001/graphql'
});

const link = ApolloLink.from([errorLink, httpLink]);

{/* Pass our GraphQL endpoint & error links to ApolloClient API */}
const client = new ApolloClient({ 
  link,
  cache: new InMemoryCache() 
});


export default function App() {

  const [ words, setWord ] = useState([]);
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  useEffect(() => {
      (async () => {
      const words = await fetchRequest()
      setWord(words) ;
    })()
  }, [])

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}

          />
        </RootStack.Navigator>
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
