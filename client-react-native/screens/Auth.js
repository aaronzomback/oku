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
        <div className="form-flex" style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <div>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <form onSubmit={submitHandler}>
              <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
              <label style={{fontSize: 16, marginBottom: 4 }}>Email</label>
              <input placeholder="Enter email..."
                     onChange={onChangeHandlerEmail}
                     name="email"
                     value={email}
                     noValidate
                     
              ></input>
              <label style={{fontSize: 16, marginBottom: 4, marginTop: 8 }}>Password</label>
              <input placeholder="Enter password..."
                     onChange={onChangeHandlerPassword}
                     name="password"
                     value={password}
                     type="password"
                     noValidate

              ></input>
              <button type="submit" style={{marginTop: 8, backgroundColor: '#60BADA'}}>
                Sign in
              </button>
              </View>
            </form>
            </View>
          </div>
        </div>
  )
}

export default Auth;