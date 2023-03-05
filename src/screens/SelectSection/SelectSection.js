import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { sectionlogo } from '../../assets/images';
import Button from '../../components/Button/Button';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const SelectSection = () => {
    const navigation = useNavigation();
    const [section, setName] = useState("A");
    const route = useRoute();

    const ContinuetoClicked = () => {

        if (!section) {
            alert('section cannot be empty');
            return;
        }

        const data = {data: {...route?.params?.data, section}};
        navigation.navigate('Blood Group',data);
        console.log('Section',data)
    };

    return (
        <View style={styles.body}>

            <View style={styles.main}>
                <Image
                    source={sectionlogo}
                    resizeMode="contain"
                    style={styles.applogo}
                />
            </View>

            <View style={styles.SigninContainer}>
                <Text style={styles.SigninText}>Select Section</Text>
                <Text style={styles.plainText}>This Application require your class of section</Text>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    placeholder="Your section"
                    value={section}
                    onChangeText={str => setName(str)}
                />

                <Button
                    title="Continue"
                    onPress={ContinuetoClicked}
                    disabled={!section}
                />

            </View>
        </View>
    );
};

export default SelectSection;
