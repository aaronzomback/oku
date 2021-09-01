import React from 'react';


import { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { FETCH_USER_QUERY, FETCH_USER_BY_EMAIL } from '../graphql/Queries';
import { View, Stylesheet, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';



function FormModal ({isAuthenticated, setIsAuthenticated, navigation}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);


  const [ getUser, { data, loading, called } ] = useLazyQuery(FETCH_USER_QUERY);
  data ? console.log('is it this?: ', data) : null;

  if (loading) return <Text>Loading...</Text>;

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
       <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
          <View>
            <Text style={{marginBottom: 32, color: '#20994C', fontSize: 56, textAlign: 'center', letterSpacing: 24 }}>OKU</Text>
          <Text style={{fontSize: 16, marginBottom: 12, color: '#20994C' }}>Email</Text>
          <TextInput placeholder="Enter email..."
                 onChange={onChangeHandlerEmail}
                 name="email"
                 value={email}
                 noValidate
                 style={{marginBottom: 16, borderColor: '#20994C', borderWidth: 2.2, padding: 3 }}
                 
          ></TextInput>
          <Text style={{fontSize: 16, marginBottom: 12, marginTop: 8, color: '#20994C' }}>Password</Text>
          <TextInput placeholder="Enter password..."
                 onChange={onChangeHandlerPassword}
                 name="password"
                 value={password}
                 secureTextEntry={true}
                 noValidate
                 style={{borderColor: '#20994C', borderWidth: 2.2, padding: 3 }}

          ></TextInput>
          <TouchableOpacity onPress={submitHandler} style={{ width: 300, marginTop: 8, color: '#F5F2EB', backgroundColor: '#20994C', borderRadius: 5, padding: 1, textAlign: "center", marginTop: 4}}>
            <Text style={{fontSize: 21, color: '#F5F2EB' }}>Sign in</Text>
          </TouchableOpacity>
          </View>
      </View>
)
}



export default FormModal;
