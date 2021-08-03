import React from 'react';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { useQuery } from '@apollo/client';
import { View, Text, StyleSheet, Button } from 'react-native';
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
          <h1 style={{textAlign: 'center'}}>
            <Text>O</Text> <br></br>
            <Text>K</Text> <br></br>
            <Text>U</Text> <br></br>
          </h1>
        </div>
          <Auth navigation={navigation} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>

          </Auth>
        </Text>
          <Button style={{backgroundColor: '#F2F4F7', padding: 16, marginTop: 16 , borderColor: '#60BADA'}}
    title="Sign up"
    onPress={() => navigation.navigate('SignUp')}
  
  > Sign up </Button>
      </View>
      </section>
    )
  }

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 24,
    color: '#60BADA'
  }
});

export default HomeScreen;