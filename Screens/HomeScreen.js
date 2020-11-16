import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';


import WelcomeGreeting from '../components/WelcomeGreeting';
import SymptomsTab from '../Tabs/SymptomsTab';
import fire from '../fire';


function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <WelcomeGreeting user={props.user ? props.user.email : "Guest"} />
            <View style={styles.container}>
                <SymptomsTab />
            </View>
            <View style={styles.logoutview}>
                <Button
                    color='white'
                    onPress={() => {
                        fire.auth().signOut()
                            .then(() => { props.handleUserLogout; })
                            .catch((err) => console.log(err));
                    }}>Logout</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
    logoutview: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '5%',
        backgroundColor: '#00587a',
    },
});

export default HomeScreen;


















// <NavigationContainer>
//             <BottomTab.Navigator initialRouteName="Symptoms"
//                 tabBarOptions={{
    //                     activeTintColor: '#FFFFFF',
    //                     inactiveTintColor: '#545454',
    //                     style: {
        //                         backgroundColor: '#242424',
        //                     },
        //                     labelStyle: {
            //                         fontSize: 21,
            //                         padding: 10,
            //                     },
            //                     indicatorStyle: {
                //                         borderBottomColor: '#121212',
                //                         borderBottomWidth: 20,
                //                     },
                //                 }}
                //             >
                //                 <BottomTab.Screen name="Symptoms" component={SymptomsTab} />
                //                 <BottomTab.Screen name="Conditions" component={ConditionsTab} />
                //             </BottomTab.Navigator>

                // </NavigationContainer>