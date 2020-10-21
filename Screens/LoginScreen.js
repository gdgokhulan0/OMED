import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, AsyncStorage } from 'react-native';
import { TextInput, Button, ActivityIndicator } from 'react-native-paper';
import HomeScreen from '../Screens/HomeScreen'

import fire from '../fire';


function LoginScreen(props) {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [hasAccount, setHasAccount] = useState(false);


    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.email);
            }else {
                setUser('');
              }
        });
    },[user]);

    const handleLogin = () => {
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setErrorEmail(err.message);
                        break;
                    case 'auth/wrong-password':
                        setErrorPassword(err.message);
                        break;
                }
            });
    }
 

    const handleSignUp = () => {
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/user-already-in-use':
                    case 'auth/invalid-email':
                        setErrorEmail(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordEmail(err.message);
                        break;
                }
            });
    }



    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <ImageBackground source={require('../images/LoginBG.png')} style={styles.image} />
            </View>
            <View style={styles.bottomcontainer}>
                <View style={styles.inputStyle}>
                    <TextInput
                        label='Email'
                        onChangeText={(text) => { setErrorEmail(''); setEmail(text)  }}
                    />
                </View>
                <Text style={{ color: 'white', fontSize: 10, width: 300 }}>{errorEmail}</Text>
                <View style={styles.inputStyle}>
                    <TextInput
                        label='Password'
                        onChangeText={(text) => {setErrorPassword('');setPassword(text) }}
                        secureTextEntry={true}
                    />
                </View>
                <Text style={{ color: 'white', fontSize: 10, width: 300 }}>{errorPassword}</Text>
                {
                    hasAccount ? (
                        <View>
                            <View style={styles.inputStyle}>
                                <Button mode="contained" onPress={() => {
                                    handleLogin();
                                    if (user !== '')
                                        props.navigation.navigate("Home");
                                }}>
                                    Login
                            </Button>
                            </View>
                            <View style={styles.textStyle}>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                    Don't have an account?
                                </Text>
                                <Button mode="text" onPress={() => { setHasAccount(false) }}>
                                    SignUp
                                </Button>
                            </View>
                        </View>
                    ) : (
                            <View>
                                <View style={styles.inputStyle}>
                                    <Button mode="contained" onPress={handleSignUp}>
                                        SignUp
                                </Button>
                                </View>
                                <View style={styles.textStyle}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                        Have an account?
                                </Text>
                                    <Button mode="text" onPress={() => { setHasAccount(true) }}>
                                        Login
                                </Button>
                                </View>
                            </View>
                        )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tinyLogo: {
        marginTop: 5,
        borderRadius: 100,
        width: 40,
        height: 40,
    },
    image: {
        flex: 1,
        width: '100%'
    },
    bottomcontainer: {
        width: '100%',
        backgroundColor: '#202054',
        flex: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputStyle: {
        marginBottom: 30,
        width: 350,
        height: 50,
        padding: 10,
    },
    textStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
});

export default LoginScreen;