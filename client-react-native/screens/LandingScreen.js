import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { View, Button, Text } from 'react-native';




function LandingScreen ({navigation}) {



  return (
    <View style={{backgroundColor: '#F5F2EB', height: 500}}>
      <View style={{fontSize: 24, flex: 1, justifyContent: "center", marginLeft: "auto", marginRight: "auto", width: 400}}>
    <TouchableOpacity
    onPress={() => navigation.navigate('Create')}
    style={{marginBottom: 6, width: 200, paddingTop: 1, paddingBottom: 1}}
      >
      <Text style={{fontSize:32, color: '#20994C', textAlign: "center", textTransform: "uppercase"}}>Create a haiku</Text>
      </TouchableOpacity>
  <TouchableOpacity
    onPress={() => navigation.navigate('Feed')}
    style={{marginBottom: 6, width: 200, paddingTop: 1, paddingBottom: 1}}
  >
    <Text style={{fontSize:32, color: '#20994C', textAlign: "center", textTransform: "uppercase"}}>Feed</Text>
    </TouchableOpacity>
  <TouchableOpacity
    onPress={() => navigation.navigate('WordOfDay')}
    style={{marginBottom: 6, width: 200, paddingTop: 1, paddingBottom: 1}}
  >
    <Text style={{fontSize:32, color: '#20994C', textAlign: "center", textTransform: "uppercase"}}>Word of Day</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate('MyCollection')}
    style={{marginBottom: 6, width: 200, paddingTop: 1, paddingBottom: 1}}

  >
     <Text style={{fontSize:32, color: '#20994C', textAlign: "center", textTransform: "uppercase"}}>My Collection</Text>
    </TouchableOpacity>
  <TouchableOpacity
    onPress={() => navigation.navigate('MyHaikus')}
    style={{marginBottom: 6, width: 200, paddingTop: 1, paddingBottom: 1}}
  >
      <Text style={{fontSize:32, color: '#20994C', textAlign: "center", textTransform: "uppercase"}}>My Haikus</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate('Profile')}
    style={{marginBottom: 6, width: 200, paddingTop: 1, paddingBottom: 1}}
  >
    <Text style={{fontSize:32, color: '#20994C', textAlign: "center", textTransform: "uppercase"}}>Profile</Text>
    </TouchableOpacity>
  <TouchableOpacity
    onPress={() => navigation.navigate('Gallery')}
    style={{marginBottom: 6, width: 200, paddingTop: 1, paddingBottom: 1}}
  >
    <Text style={{fontSize:32, color: '#20994C', textAlign: "center", textTransform: "uppercase"}}>Gallery</Text>
  </TouchableOpacity>
        </View>
</View>

  )
}




export default LandingScreen;