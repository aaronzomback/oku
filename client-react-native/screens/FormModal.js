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

  if (loading) return <p>Loading ...</p>;

  // if (data) {
  //   if (data.length) {
  //     console.log('data call: ', data);
  //     setIsAuthenticated(true);
  //     console.log('is auth?: ', isAuthenticated)
  //     navigation.navigate('Landing');
  //   }
  //   else {
  //     setIsAuthenticated(false);
  //     setError(true);
  //   }
  // }
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
       <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '4em' }}>
          <View>
            <Text style={{color: '#20994C', fontSize: '8rem', textAlign: 'center' }}>OKU</Text>
          <Text style={{fontSize: 16, marginBottom: 4, color: '#20994C' }}>Email</Text>
          <TextInput placeholder="Enter email..."
                 onChange={onChangeHandlerEmail}
                 name="email"
                 value={email}
                 noValidate
                 style={{outlineStyle: 'none', borderColor: '#20994C', borderWidth: 2.2, padding: '0.6em' }}
                 
          ></TextInput>
          <Text style={{fontSize: 16, marginBottom: 4, marginTop: 8, color: '#20994C' }}>Password</Text>
          <TextInput placeholder="Enter password..."
                 onChange={onChangeHandlerPassword}
                 name="password"
                 value={password}
                 secureTextEntry={true}
                 noValidate
                 style={{outlineStyle: 'none', borderColor: '#20994C', borderWidth: 2.2, padding: '0.6em' }}

          ></TextInput>
          <TouchableOpacity onPress={submitHandler} style={{ width: '20em', marginTop: 8, color: '#F5F2EB', backgroundColor: '#20994C', borderRadius: '4em', padding: "0.6em", textAlign: "center", marginTop: '2em'}}>
            <Text style={{fontSize: "16px", color: '#F5F2EB' }}>Sign in</Text>
          </TouchableOpacity>
          </View>
      </View>
)
}



export default FormModal;
