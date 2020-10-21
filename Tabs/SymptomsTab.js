import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, RadioButton, TextInput } from 'react-native-paper';

import axios from 'axios';

import symptom from '../symptom';
import MultiSelect from 'react-native-multiple-select';

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


    const onSelectedItemsChange = (SID) => {
        setSID(SID);
    };

    return (
        <ScrollView style={{marginTop:32}}>
            <TouchableOpacity style={styles.heading}>
                <Text style={styles.headText}>Select the Gender</Text>
            </TouchableOpacity>
            <View>
                <View style={styles.genderview}>
                    <RadioButton
                        value="male"
                        status={gender === 'male' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('male')}
                    />
                    <Text style={{ paddingTop: 7 }} >Male</Text>
                </View>
                <View style={styles.genderview}>
                    <RadioButton
                        value="female"
                        status={gender === 'female' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('female')}
                    />
                    <Text style={{ paddingTop: 7 }}>Female</Text>
                </View>
            </View>
            <View>
                <TextInput
                    mode='flat'
                    value={age}
                    placeholder='Enter Your Age'
                    onChangeText={(num) => setAge(num)}
                />
            </View>
            <TouchableOpacity style={styles.heading}>
                <Text
                    style={styles.headText}
                >
                    Select the Symptoms to be Diagnonsed.
                    </Text>
            </TouchableOpacity>
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
            <View>
                {
                    evidence.length === 0 ? <Text>No Symptoms Selected</Text> :
                        evidence.map((selected) => (
                            <View key={selected.id} style={styles.idshow}>
                                <Text style={{ color: 'black' }}>{selected.id}</Text>
                            </View>
                        ))
                }
            </View>
            {
                evidence.length === 0 ? <View></View> :
                    <View>
                        <Button
                            style={styles.butt}
                            mode='contained'
                            onPress={() => { getdiagnoses(reqobj, setResarr) }}
                        >
                            Submit
                        </Button>
                    </View>
            }
            <TouchableOpacity style={styles.heading}>
                <Text
                    style={styles.headText}
                >
                    Diagnosed Result
                    </Text>
            </TouchableOpacity>

            <View>
                {
                    resarr.length === 0 ? <Text>No Result</Text> :
                        resarr.map((res) => (
                            <View key={res.id} style={styles.idshow}>
                                <Text style={{ color: 'black' }}>{res.name}</Text>
                            </View>
                        ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    genderview: {
        flex: 1,
        flexDirection: 'row'
    },
    butt: {
        backgroundColor: 'black',
        marginRight: 2,
        marginLeft: 2,
    },
    headText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    heading: {
        marginTop: 1,
        marginBottom:2,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 7,
        backgroundColor: '#121212'
    },
    idshow: {
        marginBottom: 4,
        marginRight: 2,
        marginLeft: 2,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#121212',
        borderWidth: 1,
    }
});

export default SymptomsTab;
