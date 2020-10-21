import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Button } from 'react-native-paper';
import SymptomsTab from '../Tabs/SymptomsTab';
import ConditionsTab from '../Tabs/ConditionsTab';
const BottomTab = createBottomTabNavigator();
import fire from '../fire';
import { View, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

function HomeScreen(props) {
    return (
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName="Symptoms"
                tabBarOptions={{
                    activeTintColor: '#FFFFFF',
                    inactiveTintColor: '#545454',
                    style: {
                        backgroundColor: '#242424',
                    },
                    labelStyle: {
                        fontSize: 21,
                        padding: 10,
                    },
                    indicatorStyle: {
                        borderBottomColor: '#121212',
                        borderBottomWidth: 20,
                    },
                }}
            >
                <BottomTab.Screen name="Symptoms" component={SymptomsTab} />
                <BottomTab.Screen name="Conditions" component={ConditionsTab} />
            </BottomTab.Navigator>
            <View style={styles.logoutview}>
                <Button
                    style={styles.butt}
                    onPress={() => {
                        fire.auth().signOut()
                            .then(() => { console.log("Logout Successfull!!") })
                            .catch((err) => console.log(err));
                    }}>Logout</Button>
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
butt:{
    backgroundColor:'black',
    color:'white'
},
logoutview:{
    marginTop:1,
    marginBottom:1,
}
});

export default HomeScreen;