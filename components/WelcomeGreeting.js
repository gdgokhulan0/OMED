import React from 'react';
import { View,StyleSheet } from 'react-native';
import AppText from './AppText';

const WelcomeGreeting = ({user}) => (
    <View style={styles.container}>
        <AppText style = {styles.text}>Hello {user}</AppText>
    </View>
);

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0f3057',
        justifyContent: 'center',
        alignItems:'center',
    },
    text:{
        color: 'white',
        fontSize:24,
        fontWeight:'normal',
    }
});

export default WelcomeGreeting;
