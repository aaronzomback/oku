import React from 'react';
import { syllable } from 'syllable';
import { useForm } from '../util/hooks';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_HAIKU_MUTATION } from '../graphql/Mutations';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { Input, Button } from 'react-native-elements';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native';

function HaikuForm () {

  // initialize initial empty form inputs
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');

  const [syllablesLine1, setSyllablesLine1] = useState(5);
  const [syllablesLine2, setSyllablesLine2] = useState(7);
  const [syllablesLine3, setSyllablesLine3] = useState(5);

  const [error, setError] = useState(false);
  const [syllableError1, setSyllableError1] = useState(false);
  const [syllableError2, setSyllableError2] = useState(false);
  const [syllableError3, setSyllableError3] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (syllable(line1) === 5 && syllable(line2) === 7 && syllable(line3) === 5) {
      await createHaiku({
        variables: {
          line1,
          line2,
          line3
        }
      });
      setLine1('');
      setLine2('');
      setLine3('');
    } else {
      setError(true);
      alert('You must fulfill all syllable requirements! 👀')
    }
  }


  const onChangeHandlerLine1 = (e) => {
    setLine1(e.target.value);
    setSyllablesLine1( 5 - syllable(e.target.value));
    const setSyllLine1 = 5 - syllable(e.target.value);
    setSyllLine1 < 0 ? setSyllableError1(true) : setSyllableError1(false);
    error && setError(false);
  }

  const onChangeHandlerLine2 = (e) => {
    setLine2(e.target.value);
    setSyllablesLine2(7 - syllable(e.target.value));
    const setSyllLine2 = 7 - syllable(e.target.value);
    setSyllLine2 < 0 ? setSyllableError2(true) : null;
    error && setError(false);
  }

  const onChangeHandlerLine3 = (e) => {
    setLine3(e.target.value);
    setSyllablesLine3( 5 - syllable(e.target.value));
    const setSyllLine3 = 5 - syllable(e.target.value);
    setSyllLine3 < 0 ? setSyllableError3(true) : null;
    error && setError(false);
  }


  const [createHaiku ] = useMutation(CREATE_HAIKU_MUTATION);
  

  function createHaikuCallback() {
    createHaiku();
  }
  
  return (
    <form className="create-haiku-form" onSubmit={submitHandler}>
      <h2 className="create-haiku-title">
        Create haiku:
      </h2>
      <View style={styles.input}>
      <input placeholder="Enter your first line..." name='line1' value={line1} onChange={onChangeHandlerLine1} noValidate></input>
      { !syllableError1 ? <Text>  { syllablesLine1 }  / 5 syllables remaining</Text>
       :
        <Text> { syllablesLine1 } No syllables left!</Text>
       }
      <input placeholder="Enter your second line..." name='line2' value={line2} onChange={onChangeHandlerLine2} noValidate></input>
      { !syllableError2 ? <Text>  { syllablesLine2 }  / 7 syllables remaining</Text>
       :
        <Text> { syllablesLine2 } No syllables left!</Text>
       }
       <input placeholder="Enter your third line..." name='line3' value={line3} onChange={onChangeHandlerLine3} noValidate></input>
       { !syllableError3 ? <Text>  { syllablesLine3 }  / 5 syllables remaining</Text>
       :
        <Text> { syllablesLine3 } No syllables left!</Text>
       }
      </View>
      <View style={styles.button}>
      <button type="submit"><Text>Publish haiku</Text></button>
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
    marginTop: 88,
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