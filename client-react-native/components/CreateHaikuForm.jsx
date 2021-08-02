import React from 'react';
import { useForm } from '../util/hooks';
import { useMutation } from '@apollo/client';
import { CREATE_HAIKU_MUTATION } from '../graphql/Mutations';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { Input, Button } from 'react-native-elements';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';

function HaikuForm () {


  const { values, onChange, onSubmit } = useForm(createHaikuCallback, {
    content: ''
  });

  const [createHaiku, { error }] = useMutation(CREATE_HAIKU_MUTATION, {
    variables: values,
    // here we access our apollo cache to display all haikus & our recent posted one
    update(_, result) {
      // const data = proxy.readQuery({
      //   query: FETCH_HAIKUS_QUERY
      // })
      // data.getHaikus = [...data.createHaikus, result.data.getHaikus]
      // proxy.writeQuery({ query: FETCH_HAIKUS_QUERY, data })
      console.log(result);
      values.content = '';
    }
  });

  function createHaikuCallback() {
    createHaiku();
  }
  
  return (
    <View style={styles.baseText}>
      <form className="create-haiku-form" onSubmit={onSubmit}>
        <h2 className="create-haiku-title" style={{ textAlign: 'center' }}>
          Create haiku:
        </h2>
      <View styles={styles.inputFlex}>
        <TextInput style={styles.input} placeholder="Enter your first line..." name='content' value={values.content} onChange={onChange}></TextInput>
        <TextInput style={styles.input} placeholder="Enter your second line..." name='content' value={values.content} onChange={onChange}></TextInput>
        <TextInput style={styles.input} placeholder="Enter your third line..." name='content' value={values.content} onChange={onChange}></TextInput>
        <input type='hidden' name='content' value={values.content} onChange={onChange}></input>
      </View>
        <TouchableOpacity type="submit" style={styles.button}>
          Publish haiku
        </TouchableOpacity>
      </form>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    flex: 1,
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 24,
    color: '#60BADA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputFlex: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    width: 400,
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    padding: 10,
    borderColor: '#60BADA',
    alignItems: 'center'
    // width: '50%'
  },
  button: {
    flex: 1, 
    textAlign: 'center', 
    width: 400, 
    justifyContent: 'center', 
    padding: '24', 
    alignItems: 'center', 
    color: '#F2F4F7', 
    backgroundColor: '#60BADA',
    padding: 10
  }
});



export default HaikuForm;