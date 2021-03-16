import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

export default function HomeScreen({navigation}) {
  // console.log(navigation)
  return (
    <View style={styles.homePage}>
      <ScrollView>
        <Text style={styles.homePageText}>Home Screen</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: 'rgb(250 , 255 , 195 )',
    //   padding : 40
  },
  homePageText: {
    fontSize: 34,
    color: 'rgb(25 , 255 , 255)',
  },
});
