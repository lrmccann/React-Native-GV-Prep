import 'react-native-gesture-handler';
import React , { useState, useEffect, createContext, useReducer, useMemo } from 'react';
import AuthNavigator, {AuthContext} from './App/Navigation/AuthNavigator';
import firebase from '@react-native-firebase/app';
import firebaseConfig from './App/configs/firebaseconfig';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import Routes from './App/Navigation/routes';
import Providers from './App/Navigation';
// import LoggedInFlow from './App/Navigation/LoggedInStack';
// import NotLoggedInFlow from './App/Navigation/LoggedOutStack';

const App = () => {
  
  console.log(firebase.app() , "i am theee console")

  const startFirebase = () => {
    firebase.initializeApp(firebaseConfig);
    // firebase.app()
  }

  useEffect(() => {
    startFirebase()
  })



  return (
    // userToken == null ? (
      <View style={styles.container}>

        {/* <Routes /> */}
        <Providers />

        {/* <AuthNavigator /> */}

        {/* <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <AuthContext.Provider value={authContextValue}>
          <LoggedOutStack />
          </AuthContext.Provider>
        </SafeAreaView>
      </View>
    ) : (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
        <AuthContext.Provider value={authContextValue}>
          <LoggedInStack />
          </AuthContext.Provider>
        </SafeAreaView> */}
      </View>
    )
  // );
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
  }
});

export default App;
