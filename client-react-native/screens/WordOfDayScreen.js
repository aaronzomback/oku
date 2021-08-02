import React from 'react';
import { View, StyleSheet } from 'react-native'


function WordOfDay ({words}) {


  return (
    <View style={styles.baseText}>
      <section>
        <h1>
          {words.word}
        </h1>
        <h3>// {words.definitions[1]["partOfSpeech"]} //</h3>
        <i><h2>
        {words.definitions[1]["text"]}
        </h2></i>
    </section>
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