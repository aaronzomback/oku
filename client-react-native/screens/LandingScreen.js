import React from 'react';

import { View, Button } from 'react-native';




function LandingScreen ({navigation}) {



  return (
    <View>
    <Button
    title="Create a haiku"
    onPress={() => navigation.navigate('Create')}
  />
  <Button
    title="Feed"
    onPress={() => navigation.navigate('Feed')}
  />
  <Button
    title="Word of Day"
    onPress={() => navigation.navigate('WordOfDay')}
  />
  <Button
    title="Sign up"
    onPress={() => navigation.navigate('SignUp')}
  />
</View>

  )
}




export default LandingScreen;