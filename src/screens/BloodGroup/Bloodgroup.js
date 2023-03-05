import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { bloodgrouplogo } from '../../assets/images';
import Button from '../../components/Button/Button';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const BloodGroup = () => {
    const navigation = useNavigation();
    const [blood, setName] = useState("A/B");
    const route = useRoute();

    const ContinuetoClicked = () => {

        if (!blood) {
            alert('section cannot be empty');
            return;
        }

        const data = {data: {...route?.params?.data, blood}};
        navigation.navigate('DOB');
        console.log(data)
    };

    return (
        <View style={styles.body}>

            <View style={styles.main}>
                <Image
                    source={bloodgrouplogo}
                    resizeMode="contain"
                    style={styles.applogo}
                />
            </View>

            <View style={styles.SigninContainer}>
                <Text style={styles.SigninText}>Select Blood Group</Text>
                <Text style={styles.plainText}>This Application require your blood group</Text>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    placeholder="blood"
                    value={blood}
                    onChangeText={str => setName(str)}
                />

                <Button
                    title="Continue"
                    onPress={ContinuetoClicked}
                    disabled={!blood}
                />

            </View>
        </View>
    );
};

export default BloodGroup;
