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
    title="My Collection"
    onPress={() => navigation.navigate('MyCollection')}
  />
  <Button
    title="My Haikus"
    onPress={() => navigation.navigate('MyHaikus')}
  />
    <Button
    title="Profile"
    onPress={() => navigation.navigate('Profile')}
  />
  <Button
    title="Gallery"
    onPress={() => navigation.navigate('Gallery')}
  />
</View>

  )
}




export default LandingScreen;