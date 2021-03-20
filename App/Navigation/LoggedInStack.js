import React, {
  useState,
  useEffect,
  createContext,
  useReducer,
  useMemo,
} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faBorderAll} from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import {Dimensions, View} from 'react-native';
import DashboardScreen from '../views/DashboardScreen';
import HomeScreen from '../views/HomeScreen';
import SettingsScreen from '../views/SettingsScreen';
import {AuthProvider} from './AuthNavigator';

// START TAB BAR NAVIGATION FOR LOGGED IN USERS //
const Tab = createBottomTabNavigator();
export default function LoggedInFlow() {
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
    <>
      <View
        style={{
          height: dimensions.window.height - 50,
          width: dimensions.window.width,
        }}>
        <AuthProvider>
          {/* <NavigationContainer> */}
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let iconColor;
                let iconSize;
                if (route.name === 'Home') {
                  iconName = faHome;
                  iconSize = 20;
                  iconColor = 'rgb(30 , 80 , 200)';
                } else if (route.name === 'Dashboard') {
                  iconName = faBorderAll;
                  iconSize = 20;
                  iconColor = 'rgb(10 , 180 , 100)';
                }

                return (
                  <FontAwesomeIcon
                    icon={iconName}
                    color={iconColor}
                    size={iconSize}
                  />
                );
              },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
          {/* </NavigationContainer> */}
        </AuthProvider>
      </View>
    </>
  );
}
// END TAB BAR NAVIGATION FOR LOGGED IN USER //
