import React from 'react';
import { View } from 'react-native';
import HaikuForm from '../containers/CreateHaikuForm';
import { syllable } from 'syllable'

function CreateScreen () {

  return (
    <View className='create-haiku'>
      <HaikuForm>

      </HaikuForm>
    </View>
  )
}




export default CreateScreen;