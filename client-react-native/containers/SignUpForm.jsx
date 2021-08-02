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

    const submitHandler = async () => {
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

  return (
    <div>
    <form>
      <View style={{flex: 1}}>
      <label>
        Full name
      </label>
      <input value={name}>

      </input>
      <label>
        Username
      </label>
      <input value={username}>

      </input>
      <label>
        Email
      </label>
      <input value={email}>
      
      </input>
      <label>
        Password
      </label>
      <input value={password}>
      
      </input>
      <button type="submit">
      Sign up
      </button>
      </View>
    </form>
  </div>
  )
}