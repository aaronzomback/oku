import React from 'react';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { useQuery } from '@apollo/client';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFonts } from "@use-expo/font";
import moment from 'moment';



function FeedScreen () {

  const [isLoaded] = useFonts({
    "SFProDisplay-Regular": require("../assets/fonts/SFProDisplay-Regular.otf"),
  });

  const { data, loading, error } = useQuery(FETCH_HAIKUS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data) console.log(data);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <Text style={styles.baseText}>
        <div>
          {data.haikus.map( haiku => {
            return haiku.author ?
            <div key={haiku.id} style={{marginBottom: 8}}>
              <div>
                <p style={{marginBottom: 2}}>{haiku.line1},</p>
                <p style={{margin: 2}}>{haiku.line2},</p>
                <p style={{margin: 2}}>{haiku.line3}</p>
              </div>
              <View style={styles.authorText}>
              <p style={{margin: 0 }}>@{haiku.author.username}</p>
              <p style={{marginTop: 2, borderWidth: 2}}>{moment(haiku.createdAt).fromNow()}</p>
              </View>
              <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
></View>
     </div> 
            :
            <div key={haiku.id}>
            <div>
              <Text>
              <p>{haiku.line1}</p>
              <p>{haiku.line2}</p>
              <p>{haiku.line3}</p>
              </Text>
            </div>
            <Text style={styles.authorText}>
            <span>{moment(haiku.createdAt).fromNow()}</span>
            </Text>
          </div>
          })}
        </div>
      </Text>
    </View>
  )
  }


const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 24,
    color: '#60BADA'
  },
  authorText: {
    fontSize: 14,
  }
});


export default FeedScreen;