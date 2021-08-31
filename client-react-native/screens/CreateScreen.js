import React from 'react';
import { View } from 'react-native';
import HaikuForm from '../containers/CreateHaikuForm';
import { syllable } from 'syllable'

function CreateScreen () {

  return (
    <View style={{backgroundColor: '#F5F2EB', height: 500}}>
      <HaikuForm>

      </HaikuForm>
    </View>
  )
}




export default CreateScreen;