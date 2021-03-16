import 'react-native-gesture-handler';
import React from 'react';
import firebase from '@react-native-firebase/app';
import firebaseConfig from './App/configs/firebaseconfig';
import {StyleSheet, View} from 'react-native';
import Providers from './App/Navigation';

const App = () => {
  // console.log(firebase.app(), 'i am the console');

  // const startFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  // firebase.app();
  // };

  // useEffect(() => {
  // startFirebase();
  // });

  return (
    <View style={styles.container}>
      <Providers />
    </View>
  );
};

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

export default App;
