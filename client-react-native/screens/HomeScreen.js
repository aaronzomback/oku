import React from 'react';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { useQuery } from '@apollo/client';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import LogInForm from '../containers/LogInForm';

function HomeScreen({navigation}) {

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
          <h1>
            <Text>O</Text>
            <br />
            <Text>K</Text> 
            <br />
            <Text>U</Text>
          </h1>
        </div>
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
      <LogInForm>

      </LogInForm>
        </Text>
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