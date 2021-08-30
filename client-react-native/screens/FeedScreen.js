import React from 'react';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { useQuery } from '@apollo/client';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFonts } from "@use-expo/font";
import moment from 'moment';



function FeedScreen () {

  const [isLoaded] = useFonts({
    "SFTextroDisTextlay-Regular": require("../assets/fonts/SFProDisplay-Regular.otf"),
  });

  const { data, loading, error } = useQuery(FETCH_HAIKUS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data) console.log(data);

  return (
    <View style={{backgroundColor: '#F5F2EB', color: '#20994C',  flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <Text style={styles.baseText}>
        <View>
          {data.haikus.map( haiku => {
            return haiku.author ?
            <View key={haiku.id} style={{marginBottom: 8}}>
              <View>
                <Text style={{marginBottom: 2, color: '#20994C'}}>{haiku.line1},</Text>
                <Text style={{margin: 2, color: '#20994C'}}>{haiku.line2},</Text>
                <Text style={{margin: 2, color: '#20994C'}}>{haiku.line3}</Text>
              </View>
              <View style={styles.authorText}>
              <Text style={{margin: 0, color: '#20994C' }}>@{haiku.author.username}</Text>
              <Text style={{marginToText: 2, borderColor: '#20994C',  color: '#20994C'}}>{moment(haiku.createdAt).fromNow()}</Text>
              </View>
              <View
  style={{
    borderBottomColor: '#20994C',
    borderBottomWidth: 1,
  }}
></View>
     </View> 
            :
            <Text key={haiku.id}>
            <Text>
              <Text>
              <Text style={{marginBottom: 2, color: '#20994C'}}>{haiku.line1}</Text>
              <Text style={{margin: 2, color: '#20994C'}}>{haiku.line2}</Text>
              <Text style={{margin: 2, color: '#20994C'}}>{haiku.line3}</Text>
              </Text>
            </Text>
            <Text style={styles.authorText}>
            <Text style={{borderWidth: 0, border: "none", margin: 2, color: '#20994C'}}>{moment(haiku.createdAt).fromNow()}</Text>
            </Text>
          </Text>
          })}
        </View>
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