import React from 'react';


import { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { FETCH_USER_QUERY, FETCH_USER_BY_EMAIL } from '../graphql/Queries';
import { View, Stylesheet, Button, Text } from 'react-native';
import { Input } from 'react-native-elements';



function Auth ({isAuthenticated, setIsAuthenticated, navigation}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);


  const [ getUser, { data, loading, called } ] = useLazyQuery(FETCH_USER_QUERY);
  data ? console.log('is it this?: ', data) : null;

  if (loading) return <p>Loading ...</p>;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email == '' || password == '') {
      setIsAuthenticated(false);
      setError(true);
      alert('👀 All form inputs must be completed to join!');
    } else {
      await getUser({
        variables: {
          email,
          password
        },
      });
      setIsAuthenticated(true);
      setEmail('');
      setPassword('');
      navigation.navigate('Landing');
      console.log('line 45: ', data);
    } 
  }

  


  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value);
    console.log('email value: ', email)
    error && setError(false);
  }

  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
    console.log('password value: ', password)
    error && setError(false);
  }


  return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  
            </View>
  )
}

export default Auth;