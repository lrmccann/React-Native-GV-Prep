import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

export default function SignupScreen({navigation}) {
  // console.log(navigation)

  return (
    <View style={styles.signupPage}>
      <ScrollView>
        <Text style={styles.signupPageText}>Home Screen</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  signupPage: {
    flex: 1,
    backgroundColor: 'rgb(250 , 255 , 195 )',
    //   padding : 40
  },
  signupPageText: {
    fontSize: 34,
    color: 'rgb(25 , 255 , 255)',
  },
});
