import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './App/views/Dashboard';
import HomeScreen from './App/views/Home';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import { useState, useEffect } from 'react';

const App = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
      <AppNavigation />
      </SafeAreaView>
    </View>
  );
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  
  // VARIABLES FOR SCREEN DIMENSIONS //
  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  console.log(`height : ${dimensions.window.height} width : ${dimensions.window.width}`)
  // END SCREEN DIMENSIONS // 

return (
  <>
      <View style={{ height: dimensions.window.height - 50, width: dimensions.window.width }}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}  />
            <Tab.Screen name="Dashboard" component={Dashboard}  />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
  </>
)
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
  }
});

export default App;
