import React from 'react';
import { View, StyleSheet, Text } from 'react-native'


function WordOfDay ({words}) {


  return (
    <View style={styles.baseText}>
        <Text style={{fontSize: 40, color: '#20994C' }}>
          {words.word}
        </Text>
        <Text style={{color: '#20994C'}}>//</Text>
      <Text style={{color: '#20994C'}}>
        {words["definitions"][0]["partOfSpeech"]}
      </Text>
      <Text style={{color: '#20994C'}}>//</Text>
      <Text style={{color: '#20994C'}}>
      {words["definitions"][0]["text"]}
      </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 24,
    backgroundColor: '#F5F2EB',
    color: '#20994C'
  }
});


export default WordOfDay;