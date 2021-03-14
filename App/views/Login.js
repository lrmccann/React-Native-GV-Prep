import React from 'react';
import { useRef } from 'react';
// ASSETS //
import colors from '../assets/colors/colors';
import constants from '../assets/constants/constants';
// import fonts from '../assets/fonts/fonts';
import icons from '../assets/icons/icons';
import images from '../assets/images/images';
import typography from '../assets/typography/typography';
// END ASSETS //
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    LogBox,
    Button,
    TextInput,
    TouchableHighlight
} from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function LoginScreen({ navigation }) {

    const [usernameText , setUsernameText ] = useState();
    const [passwordText , setPasswordText] = useState();

    const beginUserLogin = () => {
        console.log(usernameText , "username")
        console.log(passwordText ,  "password")
        navigation.navigate('Home')
    }
    const signupUser = () => {
        console.log("Sign Up User")
    }

    return (
        <View style={styles.loginPage}>
            <ScrollView >
                <View style={styles.inputCont}>
                    <View>
                        <Text style={{fontSize : 40 , backgroundColor : "rgb( 40 , 40 , 40)"}}>Login</Text>
                    </View>
                <Text style={{fontSize : 25}}>Username</Text>
                    <TextInput style={styles.textInput} 
                        onChangeText={usernameText => setUsernameText(usernameText)}  
                        defaultValue={usernameText}
                    />
                <Text style={{fontSize : 25}}>Password</Text>
                    <TextInput style={styles.textInput} 
                    onChangeText={passwordText => setPasswordText(passwordText)}  
                    defaultValue={passwordText}
                    secureTextEntry
                    />
                </View>
                <View style={styles.btnCont}>
                    <TouchableHighlight 
                    style={{backgroundColor : 'rgb(200 , 80 , 140) ' , flex : 1 , alignItems : 'center' , justifyContent: 'center'}}
                    onPress={beginUserLogin}
                    >
                        <Text style={{fontSize : 30, fontWeight: "600"}}>Log In</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                    style={{backgroundColor : "rgb(100 , 130 , 200)" , flex : 1 , alignItems : 'center' , justifyContent: 'center'}}
                    onPress={signupUser}
                    >
                        <Text style={{fontSize : 30, fontWeight: "600"}}>Sign up</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    loginPage: {
        flex: 1,
        backgroundColor: "rgb(250 , 255 , 195 )",
        display : 'flex',
        flexDirection : "column",
    },
    inputCont : {
        marginTop : 110,
        alignSelf : 'center',
        flex : 1,
        height : 375,
        width : constants.screenWidth - 30,
        backgroundColor : 'rgb(200 , 140 , 20)'
    },
    textInput : {
        flex : 1,
        backgroundColor: colors.lightgray
    },
    btnCont : {
        marginTop : 125,
        flex : 2,
        height  : 190,
        width : constants.screenWidth,
    }
})