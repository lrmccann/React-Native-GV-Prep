import 'react-native-gesture-handler';
import React , { useState, useEffect, createContext, useReducer, useMemo } from 'react';
import AuthNavigator, {AuthContext} from './App/Navigation/AuthNavigator';

import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

const App = () => {

  const [userToken, setUserToken] = useState();

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'TO_SIGNUP_PAGE':
          return {
            ...prevState,
            isLoading: false,
            isSignedUp: false,
            noAccount: true
          };
        case 'TO_SIGNIN_PAGE':
          return {
            ...prevState,
            isLoading: false,
            isSignedIn: false,
            noAccount: false
          };
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGNED_UP':
          return {
            ...prevState,
            isSignedIn: true,
            isSignedUp: true,
            isLoading: false,
            userToken: action.token
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignedOut: false,
            isSignedIn: true,
            isSignedUp: true,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignedOut: true,
            isSignedIn: false,
            isSignedUp: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,
      isSignedOut: false,
      isSignedUp: false,
      noAccount: false,
      isSignedIn: false,
      userToken: null
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
        let userToken;

        try {
            userToken = await AsyncStorage.getItem('userToken');
        } catch (e) {
            console.log("Failed to log in, let's just update the log in component to show a red x or something")
        }
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
}, []);


const authContextValue = useMemo(
  () => ({
      signIn: async data => {
          if (
              data &&
              data.emailAddress !== undefined &&
              data.password !== undefined
          ) {
              dispatch({ type: 'SIGN_IN', token: 'Token-For-Now' });
          } else {
              dispatch({ type: 'TO_SIGNIN_PAGE' });
          }
      },
      signOut: async data => {
          dispatch({ type: 'SIGN_OUT' });
      },

      signUp: async data => {
          if (
              data &&
              data.emailAddress !== undefined &&
              data.password !== undefined
          ) {
              dispatch({ type: 'SIGNED_UP', token: 'dummy-auth-token' });
          } else {
              dispatch({ type: 'TO_SIGNUP_PAGE' });
          }
      }
  }),
  []
);

  return (
    // userToken == null ? (
      <View style={styles.container}>

        <AuthNavigator />

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
