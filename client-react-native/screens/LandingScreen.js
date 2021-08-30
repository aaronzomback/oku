import React from 'react';

import { View, Button } from 'react-native';




function LandingScreen ({navigation}) {



  return (
    <View>
    <Button
    title="Create a haiku"
    onPress={() => navigation.navigate('Create')}
    style={{backgroundColor: '#20994C'}}
  />
  <Button
    title="Feed"
    onPress={() => navigation.navigate('Feed')}
    style={{backgroundColor: '#20994C'}}
  />
  <Button
    title="Word of Day"
    onPress={() => navigation.navigate('WordOfDay')}
  />
    <Button
    title="My Collection"
    onPress={() => navigation.navigate('MyCollection')}
    style={{backgroundColor: '#20994C'}}
  />
  <Button
    title="My Haikus"
    onPress={() => navigation.navigate('MyHaikus')}
    style={{backgroundColor: '#20994C'}}
  />
    <Button
    title="Profile"
    onPress={() => navigation.navigate('Profile')}
    style={{backgroundColor: '#20994C'}}
  />
  <Button
    title="Gallery"
    onPress={() => navigation.navigate('Gallery')}
    style={{backgroundColor: '#20994C'}}
  />
</View>

  )
}




export default LandingScreen;