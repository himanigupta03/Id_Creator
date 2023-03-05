import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { studentlogo } from '../../assets/images';
import Button from '../../components/Button/Button';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Studentname = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("ria");

    const ContinuetoClicked = () => {

        if (!name) {
            alert('name cannot be empty');
            return;
        }

        navigation.navigate('Registration',{data: name,});
    };

    return (
        <View style={styles.body}>

            <View style={styles.main}>
                <Image
                    source={studentlogo}
                    resizeMode="contain"
                    style={styles.applogo}
                />
            </View>

            <View style={styles.SigninContainer}>
                <Text style={styles.SigninText}>Student Name</Text>
                <Text style={styles.plainText}>This Application require your full name as manadatory field</Text>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    placeholder="name"
                    value={name}
                    onChangeText={str => setName(str)}
                />

                <Button title="Continue" onPress={ContinuetoClicked} disabled={!name}/>

            </View>
        </View>
    );
};

export default Studentname;
