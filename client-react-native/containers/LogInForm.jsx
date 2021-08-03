import React from 'react'

import { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { FETCH_USER_QUERY, FETCH_USER_BY_EMAIL } from '../graphql/Queries';
import { View, Stylesheet, Button, Text } from 'react-native';
import { Input } from 'react-native-elements';



export default function LogInForm () {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const [ getUser, {data} ] = useLazyQuery(FETCH_USER_QUERY);
  data ? console.log(data) : null

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email != '' && password != '') {
      await getUser({
        variables: {
          email,
          password
        }
      });
      setEmail('');
      setPassword('');
    } else {
      setError(true);
      alert('👀 All form inputs must be completed to join!');
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
        <div className="form-flex">
          <div>
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
            <form onSubmit={submitHandler}>
              <View style={{flex: 1, alignContent: 'center'}}>
              <label>Email</label>
              <input placeholder="Enter email..."
                     onChange={onChangeHandlerEmail}
                     name="email"
                     value={email}
                     noValidate
              ></input>
              <label>Password</label>
              <input placeholder="Enter password..."
                     onChange={onChangeHandlerPassword}
                     name="password"
                     value={password}
                     noValidate

              ></input>
              <button type="submit">
                Sign in
              </button>
              </View>
            </form>
            </View>
          </div>
        </div>
  )
}