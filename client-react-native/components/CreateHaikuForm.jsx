import React from 'react';
import { useForm } from '../util/hooks';
import { useMutation } from '@apollo/client';
import { CREATE_HAIKU_MUTATION } from '../graphql/Mutations';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { Input, Button } from 'react-native-elements';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';

function HaikuForm () {


  const { values, onChange, onSubmit } = useForm(createHaikuCallback, {
    contentFormField1: '',
    contentFormField2: '',
    contentFormField3: ''
  });








  const [createHaiku, { error }] = useMutation(CREATE_HAIKU_MUTATION, {
    variables: values,
    // here we access our apollo cache to display all haikus & our recent posted one
    update(_, result) {
      console.log(result);
      values.contentFormField1 = '';
      values.contentFormField2 = '';
      values.contentFormField3 = '';
    }
  });

  function createHaikuCallback() {
    createHaiku();
  }
  
  return (
    <form className="create-haiku-form" onSubmit={onSubmit}>
      <h2 className="create-haiku-title">
        Create haiku:
      </h2>
      <View style={styles.input}>
      <input placeholder="Enter your first line..." name='content.formField1' value={values.contentFormField1} onChange={onChange}></input>
      <input placeholder="Enter your second line..." name='content.formField2' value={values.contentFormField2} onChange={onChange}></input>
      <input placeholder="Enter your third line..." name='contentformField3' value={values.contentFormField3} onChange={onChange}></input>
      </View>
      <View style={styles.button}>
      <button type="submit">Publish haiku</button>
      </View>
    </form>
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
    marginTop: 48,
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