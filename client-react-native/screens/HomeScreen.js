import React from 'react';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { useQuery } from '@apollo/client';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { useState } from 'react';

import Auth from './Auth';

function HomeScreen({navigation}) {

  const [isAuthenticated, setIsAuthenticated ] = useState(false)


  const [isLoaded] = useFonts({
    "SFProDisplay-Regular": require("../assets/fonts/SFProDisplay-Regular.otf"),
  });

  const { data, loading, error } = useQuery(FETCH_HAIKUS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data) console.log(data);

  return !isLoaded ? <AppLoading />
  :
  (
      <section>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.baseText}>
        <div className="home-flex">
          <h1 style={{textAlign: 'center', fontSize: 72 }}>
            <Text style={{textShadowColor:'#521CEE', textShadowOffset:{width: 3, height: 3},textShadowRadius:0}}>O</Text> <br></br>
            <Text style={{textShadowColor:'#521CEE', textShadowOffset:{width: 3, height: 3},textShadowRadius:0}}>K</Text> <br></br>
            <Text style={{textShadowColor:'#521CEE', textShadowOffset:{width: 3, height: 3},textShadowRadius:0}}>U</Text> <br></br>
          </h1>
        </div>
          <Auth navigation={navigation} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>

          </Auth>
        </Text>
          <TouchableOpacity color='black' style={{fontFamily: 'SFProDisplay-Regular', backgroundColor: '#F2F4F7', paddingTop: 8, paddingLeft: 32, paddingRight: 32, marginTop: 16 , borderWidth: 2, color: '#60BADA', borderColor: '#60BADA'}}
    title="Sign up"
    onPress={() => navigation.navigate('SignUp')}
  
  >  Sign up </TouchableOpacity>
      </View>
      </section>
    )
  }

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 40,
    color: '#60BADA'
  }
});

export default HomeScreen;