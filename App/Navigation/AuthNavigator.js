import React, { useState, useEffect, createContext } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import LoggedInStack from './LoggedInStack';
import LoggedOutStack from './LoggedOutStack';


export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};














// export default function AuthNavigator (){
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState(null);
  
//     // Handle user state changes
//     function onAuthStateChanged(result) {
//       setUser(result)
//       if (initializing) setInitializing(false)
//     }
  
//     useEffect(() => {
//       const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged)
  
//       // unsubscribe on unmount
//       return authSubscriber
//     }, [])
  
//     if (initializing) {
//       return null
//     }
  
//     return !user ? (
//       <AuthContext.Provider value={user}>
//         <LoggedOutStack />
//       </AuthContext.Provider>
//     ) : (
//       <LoggedInStack />
//     )
// }