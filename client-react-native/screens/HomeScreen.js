import React from 'react';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { useQuery } from '@apollo/client';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { useState } from 'react';
import LogInForm from '../containers/LogInForm';

import Auth from './Auth';
import FormModal from './FormModal';

function HomeScreen({navigation}) {

  const [isAuthenticated, setIsAuthenticated ] = useState(false)


  const [isLoaded] = useFonts({
    "SFProDisplay-Regular": require("../assets/fonts/SFProDisplay-Regular.otf"),
  });

  const { data, loading, error } = useQuery(FETCH_HAIKUS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data) console.log(data);

  return (
    <View style={{backgroundColor: '#F5F2EB', height: '100vh'}}>
     <FormModal navigation={navigation} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}></FormModal>
  </View>
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