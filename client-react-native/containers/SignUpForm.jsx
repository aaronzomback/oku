import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { CREATE_USER_MUTATION } from '../graphql/Mutations';


export default function SignUpForm () {

    // initialize initial empty form inputs
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    const [createUser] = useMutation(CREATE_USER_MUTATION);

    const submitHandler = async (e) => {
      e.preventDefault();
      if (name != '' && username != '' && email != '' && password != '') {
        await createUser({
          variables: {
            name,
            username,
            email,
            password
          }
        });
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        setError(true);
        alert('👀 All form inputs must be completed to join!');
      }
    }

    const onChangeHandlerName = (e) => {
      setName(e.target.value);
      error && setError(false);
    }

    const onChangeHandlerUsername = (e) => {
      setUsername(e.target.value);
      error && setError(false);
    }

    const onChangeHandlerEmail = (e) => {
      setEmail(e.target.value);
      error && setError(false);
    }

    const onChangeHandlerPassword = (e) => {
      setPassword(e.target.value);
      error && setError(false);
    }
  

  return (
    <div>
    <form onSubmit={submitHandler}>
      <View style={{flex: 1}}>
      <label>
        Full name
      </label>
      <input value={name} onChange={onChangeHandlerName}>

      </input>
      <label>
        Username
      </label>
      <input value={username} onChange={onChangeHandlerUsername}>

      </input>
      <label>
        Email
      </label>
      <input value={email} onChange={onChangeHandlerEmail}>
      
      </input>
      <label>
        Password
      </label>
      <input value={password} onChange={onChangeHandlerPassword}>
      
      </input>
      <button type="submit">
      Sign up
      </button>
      </View>
    </form>
  </div>
  )
}