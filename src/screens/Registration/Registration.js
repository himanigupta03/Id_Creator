import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { registerlogo } from '../../assets/images';
import Button from '../../components/Button/Button';
import styles from './styles';
import { useNavigation , useRoute } from '@react-navigation/native';

const Registration = () => {
    const navigation = useNavigation();
    const [number, setName] = useState("12345");
    const route = useRoute();
    
    const ContinuetoClicked = () => {

        if (!number) {
            alert('name cannot be empty');
            return;
        }
        const data = {data: {...route?.params?.data, registrationNumber: number}};

        navigation.navigate('Class Standard',data);
        console.log('Registration', data);
    };

    return (
        <View style={styles.body}>

            <View style={styles.main}>
                <Image
                    source={registerlogo}
                    resizeMode="contain"
                    style={styles.applogo}
                />
            </View>

            <View style={styles.SigninContainer}>
                <Text style={styles.SigninText}>Registration Number</Text>
                <Text style={styles.plainText}>This Application require your registration number as optional</Text>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    placeholder="number"
                    value={number}
                    onChangeText={str => setName(str)}
                />

                <Button
                    title="Continue"
                    onPress={ContinuetoClicked}
                    disabled={!number}
                />

            </View>
        </View>
    );
};

export default Registration;
