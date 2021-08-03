import React from 'react';


import { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { FETCH_USER_QUERY, FETCH_USER_BY_EMAIL } from '../graphql/Queries';
import { View, Stylesheet, Button, Text } from 'react-native';
import { Input } from 'react-native-elements';



function Auth ({isAuthenticated, setIsAuthenticated, navigation}) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const [ getUser, {data} ] = useLazyQuery(FETCH_USER_QUERY);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email == '' && password == '') {
      setIsAuthenticated(false);
      setError(true);
      alert('👀 All form inputs must be completed to join!');
    } else {
      await getUser({
        variables: {
          email,
          password
        }
      });
      if (data) {
        setIsAuthenticated(true);
        navigation.navigate('Landing');
        setEmail('');
        setPassword('');
      } else {
        setIsAuthenticated(false);
        setError(true);
        alert('👀 Email/password are invalid! Try again!');
      }
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
                     typer="password"
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