import 'react-native-gesture-handler';
import React, {
  useState,
  useEffect,
  createContext,
  useReducer,
  useMemo,
} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Dimensions, View} from 'react-native';
import LoginScreen from '../views/Login';
import SignupScreen from '../views/Signup';
import {AuthProvider} from './AuthNavigator';

const Stack = createStackNavigator();
export default function NotLoggedInFlow() {
  // VARIABLES FOR SCREEN DIMENSIONS //
  const window = Dimensions.get('window');
  const screen = Dimensions.get('screen');
  const [dimensions, setDimensions] = useState({window, screen});
  const onChange = ({window, screen}) => {
    setDimensions({window, screen});
  };
  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });
  // console.log(`height : ${dimensions.window.height} width : ${dimensions.window.width}`)
  // END SCREEN DIMENSIONS //

  return (
    <View
      style={{
        height: dimensions.window.height - 50,
        width: dimensions.window.width,
        display: 'flex',
      }}>
      <AuthProvider>
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      </AuthProvider>
    </View>
  );
}
