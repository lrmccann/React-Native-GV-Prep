import React, { useState, useEffect, createContext } from 'react';
import auth from '@react-native-firebase/auth';
import LoggedInStack from './LoggedInStack';
import LoggedOutStack from './LoggedOutStack';


export const AuthContext = createContext(null);

export default function AuthNavigator (){
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
  
    // Handle user state changes
    function onAuthStateChanged(result) {
      setUser(result)
      if (initializing) setInitializing(false)
    }
  
    useEffect(() => {
      const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged)
  
      // unsubscribe on unmount
      return authSubscriber
    }, [])
  
    if (initializing) {
      return null
    }
  
    return user ? (
      <AuthContext.Provider value={user}>
        <LoggedOutStack />
      </AuthContext.Provider>
    ) : (
      <LoggedInStack />
    )
}