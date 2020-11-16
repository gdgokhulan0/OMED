import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const AppText = ({children, style}) => (
    <View style = {styles.text}> 
        <Text style= {[style, styles.fami]}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    text:{
        margin:10,
    },
    fami:{
        fontFamily:'serif',
    }
});

export default AppText;
