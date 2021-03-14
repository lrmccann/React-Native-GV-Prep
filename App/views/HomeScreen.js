import React from 'react';
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
    Button
} from 'react-native';

export default function HomeScreen({ navigation }) {

    // console.log(navigation)


    return (
        <View style={styles.homePage}>
            <ScrollView >
                <Text style={styles.homePageText}>
                    Home Screen
            </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        backgroundColor: "rgb(250 , 255 , 195 )",
        //   padding : 40
    },
    homePageText: {
        fontSize: 34,
        color: 'rgb(25 , 255 , 255)'
    }
})