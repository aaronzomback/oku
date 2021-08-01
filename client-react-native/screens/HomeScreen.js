import React from 'react';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { useQuery } from '@apollo/client';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { Input } from 'react-native-elements';

function HomeScreen({navigation}) {

  const [isLoaded] = useFonts({
    "SFProDisplay-Regular": require("../assets/fonts/SFProDisplay-Regular.otf"),
  });

  const { data, loading, error } = useQuery(FETCH_HAIKUS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data) console.log(data);

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <section>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.baseText}>
        <div className="home-flex">
          <h1>
            O 
            <br />
            K 
            <br />
            U
          </h1>
        </div>
        <div className="form-flex">
          <div>

            <form>
              <label>Email</label>
              <Input placeholder="Enter email..."

              />
              <label>Password</label>
              <Input placeholder="Enter password..."

              />
              <button>
                Sign in
              </button>
            </form>
            <Button
              title="Create a haiku"
              onPress={() => navigation.navigate('Create')}
            />
            <Button
              title="Feed"
              onPress={() => navigation.navigate('Feed')}
            />

          </div>
        </div>
        </Text>
      </View>
      </section>
    )
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 24,
    color: '#60BADA'
  }
});

export default HomeScreen;