import React from 'react';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { useQuery } from '@apollo/client';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

function Home() {

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
        <ul>
          {data.haikus.map( haiku => {
            return <li key={haiku.id}>{haiku.content}</li>
          })}
        </ul>
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
              <input placeholder="Enter email...">

              </input>
              <label>Password</label>
              <input placeholder="Enter password...">

              </input>
              <button>
                Sign in
              </button>
            </form>
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

export default Home;