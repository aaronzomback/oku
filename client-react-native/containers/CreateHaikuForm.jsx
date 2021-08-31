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

  {/* initialize initial empty form inputs */}
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');

  {/* track syllable count */}
  const [syllablesLine1, setSyllablesLine1] = useState(0);
  const [syllablesLine2, setSyllablesLine2] = useState(0);
  const [syllablesLine3, setSyllablesLine3] = useState(0);

  {/* track form error as a whole */}
  const [error, setError] = useState(false);

  {/* track INVALID syllable conditions for each line */}
  const [syllableError1, setSyllableErrorLine1] = useState(false);
  const [syllableError2, setSyllableErrorLine2] = useState(false);
  const [syllableError3, setSyllableErrorLine3] = useState(false);

    {/* track the VALID syllable condition for each line */}
    const [syllableValid1, setSyllableValidLine1] = useState(false);
    const [syllableValid2, setSyllableValidLine2] = useState(false);
    const [syllableValid3, setSyllableValidLine3] = useState(false);

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
    setSyllablesLine1(syllable(e.target.value));
    const setSyllLine1 = syllable(e.target.value);
    if (setSyllLine1 > 5) {
      setSyllableErrorLine1(true);
      setSyllableValidLine1(false);
      setSyllablesLine1(5 - syllable(e.target.value))
      console.log('syllable valid ?: ', syllableValid1)
    } else if (setSyllLine1 === 5) {
      setSyllableValidLine1(true)
      setSyllableErrorLine1(false);
      console.log('syllable valid ?: ', syllableValid1)
    } else {
      setSyllableErrorLine1(false);
      setSyllableValidLine1(false);
      console.log('syllable valid ?: ', syllableValid1)
    }
    error && setError(false);
  }

  const onChangeHandlerLine2 = (e) => {
    setLine2(e.target.value);
    setSyllablesLine2(syllable(e.target.value));
    const setSyllLine2 = syllable(e.target.value);
    if (setSyllLine2 > 7) {
      setSyllableErrorLine2(true);
      setSyllablesLine2(7 - syllable(e.target.value))
    } else {
      setSyllableErrorLine2(false);
    }
    error && setError(false);
  }

  const onChangeHandlerLine3 = (e) => {
    setLine3(e.target.value);
    setSyllablesLine3(syllable(e.target.value));
    const setSyllLine3 = syllable(e.target.value);
    if (setSyllLine3 > 5) {
      setSyllableErrorLine3(true);
      setSyllablesLine3(5 - syllable(e.target.value))
    } else {
      setSyllableErrorLine3(false);
    }
    error && setError(false);
  }


  const [createHaiku ] = useMutation(CREATE_HAIKU_MUTATION);
  

  function createHaikuCallback() {
    createHaiku();
  }
  
  return (
    <View style={{marginTop: 10, width: 200 }}>
      <Text className="create-haiku-title">
        Create haiku:
      </Text>
      <View >
      <TextInput style={styles.input} placeholder="Enter your first line..." name='line1' value={line1} onChange={onChangeHandlerLine1} noValidate></TextInput>
      { !syllableError1 ? <Text>  { syllablesLine1 }  / 5 syllables </Text>
       :
        <Text style={ 
          syllableError1 ? styles.invalidSyllable 
          : !syllableError1 && syllableValid1 ? styles.validSyllable
            : null }> { syllablesLine1 } syllables</Text>
       }
      <TextInput style={styles.input} placeholder="Enter your second line..." name='line2' value={line2} onChange={onChangeHandlerLine2} noValidate></TextInput>
      { !syllableError2 ? <Text>  { syllablesLine2 }  / 7 syllables</Text>
       :
        <Text> { syllablesLine2 } syllables</Text>
       }
       <TextInput style={styles.input} placeholder="Enter your third line..." name='line3' value={line3} onChange={onChangeHandlerLine3} noValidate></TextInput>
       { !syllableError3 ? <Text>  { syllablesLine3 }  / 5 syllables</Text>
       :
        <Text> { syllablesLine3 } syllables</Text>
       }
      </View>
      <View style={styles.button}>
      <TouchableOpacity 
        type="submit"
        style={{width: 200, paddingTop: 1, paddingBottom: 1}}
      
      >
        <Text
          style={{fontSize:32, color: '#F5F2EB', textAlign: "center", textTransform: "uppercase"}}
      >Publish haiku</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    flex: 1,
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 24,
    color: '#20994C',
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
    padding: 10,
    borderColor: '#20994C',
    alignItems: 'center'
  },
  button: {
    marginTop: 24,
    flex: 1, 
    textAlign: 'center', 
    width: 400, 
    justifyContent: 'center', 
    padding: '24', 
    alignItems: 'center', 
    color: '#F2F4F7', 
    backgroundColor: '#20994C',
    padding: 10
  },
  invalidSyllable: {
    color: `#dc143c`
  },
  validSyllable: {
    color: `#32cd32`,
    fontSize: 24
  }
});



export default HaikuForm;