import React , {useContext , useState , useEffect } from 'react';
import { AuthContext } from '../Navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LoggedOutStack from '../Navigation/LoggedOutStack';
import LoggedInStack from '../Navigation/LoggedInStack';
import Loading from '../components/Loading';

export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [initializing, setInitializing] = useState(true);
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
      setLoading(false);
    }
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
    if (loading) {
      return <Loading /> ;
    }
    console.log(user , "idk whatefer")
    return (
      <NavigationContainer>
        {user == null ?  <LoggedOutStack /> : <LoggedInStack /> }
      </NavigationContainer>
    );
  }