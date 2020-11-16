import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableWithoutFeedback, StyleSheet, Modal } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

import axios from 'axios';
import symptom from '../symptom';
import MultiSelect from 'react-native-multiple-select';
import AppText from '../components/AppText';
import { set } from 'react-native-reanimated';

const getdiagnoses = (reqobj, setResarr) => {
    let data = JSON.stringify(reqobj);
    let config = {
        method: 'post',
        url: 'https://api.infermedica.com/v2/suggest',
        headers: {
            'App-Id': '2df9ed03',
            'App-Key': 'fdc551123e3c20e28647ef1cfccfeee3',
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
            setResarr(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function SymptomsTab(props) {
    const [reqobj, setReqobj] = useState({});
    const [resarr, setResarr] = useState([]);
    const [SID, setSID] = useState([]);
    const [gender, setGender] = useState('');
    const [age, setAge] = useState();
    const [evidence, setEvidence] = useState([]);
    const [showSymptoms, setShowSymptoms] = useState(false);
    useEffect(() => {
        let updatedEvidence = [];
        SID.forEach((id) => {
            updatedEvidence.push({ "id": id, "choice_id": "present" });
        })
        setEvidence(updatedEvidence);
        let updatedObj = {
            "sex": gender,
            "age": age,
            "evidence": evidence
        }
        setReqobj(updatedObj);
    }, [SID, gender, age]);

    useEffect(()=>{
        setResarr([]);
    },[evidence])

    const onSelectedItemsChange = (SID) => {
        setSID(SID);
        console.log(SID);
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.SymptomsTabView}>
                <AppText style={styles.heading}>Gender</AppText>
                <View style={styles.genderview}>
                    <TouchableWithoutFeedback style={styles.genderCard} onPress={() => setGender("male")}>
                        <View style={[styles.genderCard, gender === "male" ? styles.selectedCard : ""]}>
                            <IconButton icon="human-male" color="black" />
                            <AppText>Male</AppText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={styles.genderCard} onPress={() => setGender("female")}>
                        <View style={gender === "female" ? [styles.genderCard, styles.selectedCard] : [styles.genderCard]}>
                            <IconButton icon="human-female" color="black" />
                            <AppText>Female</AppText>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.ageView}>
                    <AppText style={styles.heading}>Age</AppText>
                    <TextInput
                        style={styles.ageInputText}
                        value={age}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={(num) => setAge(num)}
                    />
                </View>
                <TouchableWithoutFeedback style={styles.diagnosesContainer} onPress={() => setShowSymptoms(true)}>
                    <View style={styles.diagnosesContainerView}>
                        <Feather name="list" size={20} color="black" />
                        <AppText style={styles.heading}>Symptoms</AppText>
                    </View>
                </TouchableWithoutFeedback>
                {
                    evidence.length === 0 ? <View></View> :
                        <View>
                            <Button
                                style={styles.submitbutt}
                                mode='contained'
                                onPress={() => { getdiagnoses(reqobj, setResarr) }}
                            >
                                Submit
                        </Button>
                        </View>
                }

                <View>
                    {
                        resarr.length === 0 ? <></> : <>
                            <AppText style={styles.heading}>Result </AppText>
                            {resarr.map((res) => (
                                <View key={res.id} style={styles.resultView}>
                                    <AppText style = {styles.resultText}>{res.name}</AppText>
                                </View>
                            ))}
                        </>
                    }
                </View>
            </ScrollView>
            <Modal visible={showSymptoms} animationType='slide'>
                <Button mode='text' style={styles.closebutt} color='#00587a' onPress={() => setShowSymptoms(false)}>Close</Button>
                <MultiSelect
                    hideTags
                    items={symptom}
                    uniqueKey="id"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={SID}
                    selectText="Select symptoms"
                    searchInputPlaceholderText="Search symptoms..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    genderview: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',

    },
    genderCard: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        paddingRight: 30,
        marginHorizontal: 3
    },
    selectedCard: {
        backgroundColor: '#008891',
        borderRadius: 25
    },
    submitbutt: {
        backgroundColor: '#00587a',
        marginHorizontal: 150,
    },
    closebutt: {
        backgroundColor: 'white',
        marginVertical: 10,
    },
    genderText: {
        fontSize: 14,
    },
    heading: {
        fontSize: 20,
        fontWeight: '500'
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#0f3057'
    },
    diagnosesContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingLeft: 20,
        borderRadius: 25,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    diagnosesContainerView: {
        flexDirection: 'row',
        width: '95%',
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
        paddingLeft: 20,
        borderRadius: 25,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    ageView: {
        padding: 10
    },
    SymptomsTabView: {
        backgroundColor: '#e7e7de',
        flex: 1,
    },
    ageInputText: {
        paddingLeft: 20,
        borderRadius: 25,
        height: 45,
        width: '20%',
        color: 'black',
        backgroundColor: 'white'
    },
    resultView:{
        backgroundColor:'white',
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:25, 
        paddingLeft:10,
        paddingVertical: 5,
    }
});

export default SymptomsTab;
