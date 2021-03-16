import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgb(255 ,25, 125)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
