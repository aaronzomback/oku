import React from 'react';
import { View, StyleSheet } from 'react-native'


function WordOfDay ({words}) {


  return (
    <View style={styles.baseText}>
        <Text>
          {words.word}
        </Text>
        <Text>// {words.definitions[1]["partOfSpeech"]} //</Text>
        <Text>
        {words.definitions[1]["text"]}
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
    color: '#60BADA'
  }
});


export default WordOfDay;