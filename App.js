import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, StatusBar, Modal } from 'react-native';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';


import fire from './fire';



function App() {
  const [act, setact] = useState(true);
  const [user, setUser] = useState('');

  const handleUserLogout = ()=>{
    setUser('');
  }
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser('');
      }
    });
    setTimeout(() => {
      setact(false);
    }, 1000);
  }, [user]);

  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {user !== '' ? <HomeScreen  user = {user} handleUserLogout = {handleUserLogout}/> : <LoginScreen />}
        </View>
      </View>
      <Modal visible={act} style={{justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color="black" size='large' />
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop : StatusBar.currentHeight,
    flex: 1, 
    justifyContent: 'center', 
    alignContent: 'center',
  },
});
export default App;




















// const homedrawer = createDrawerNavigator();
  // const loginStack = createStackNavigator();
  // const logscr = () => (
  //   <NavigationContainer>
  //     <loginStack.Navigator initialRouteName="LoginScreen"
  //       screenOptions={{
  //         headerStyle: {
  //           backgroundColor: '#252525',
  //         },
  //         headerTintColor: '#fff',
  //         headerTitleStyle: {
  //           fontWeight: 'bold',
  //         },
  //       }}
  //     >
  //       <loginStack.Screen name="Login" component={LoginScreen}
  //         options={{
  //           headerShown: false,
  //         }}
  //       />
  //       <loginStack.Screen name="Home" component={medscr}
  //         options={{
  //           headerLeft: null,
  //           headerTitleAlign: 'center',
  //           headerRight: () => (
  //             <Button mode='text' onPress={() => {
  //               handleLogout();
  //               return <LoginScreen />
  //             }}>Logout</Button>
  //           ),
  //         }}
  //       />
  //     </loginStack.Navigator>
  //   </NavigationContainer>
  // )
  // const medscr = (<NavigationContainer>
  //   <homedrawer.Navigator initialRouteName="HomeScreen">
  //     <homedrawer.Screen
  //       name="Home"
  //       component={HomeScreen}
  //       options={{
  //         headerTitle: "Hello",
  //         headerRight: () => (
  //           <Button
  //             onPress={() => alert('This is a button!')}
  //             title="Info"
  //             color="#fff"
  //           />
  //         ),
  //       }}
  //     />
  //   </homedrawer.Navigator>
  // </NavigationContainer>);