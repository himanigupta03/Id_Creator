import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { classstandard } from '../../assets/images';
import Button from '../../components/Button/Button';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const ClassStandard = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState(null);
    const route = useRoute();

    const data = [
        { label: 'Nur', value: '1' },
        { label: 'LKG', value: '2' },
        { label: '1', value: '3' },
        { label: '2', value: '4' },
        { label: '3', value: '5' },
        { label: '4', value: '6' },
        { label: '5', value: '7' },
        { label: '6', value: '8' },
        { label: '7', value: '3' },
        { label: '8', value: '4' },
        { label: '9', value: '5' },
        { label: '10', value: '6' },
        { label: '11', value: '7' },
        { label: '12', value: '8' },
      ];
    const ContinuetoClicked = () => {

        if (!value) {
            alert('your class standard is required');
            return;
        }

        const data = {data: {...route?.params?.data, value}};
        navigation.navigate('Select Section',{data});
        console.log(data)
    };

    return (
        <View style={styles.body}>

            <View style={styles.main}>
                <Image
                    source={classstandard}
                    resizeMode="contain"
                    style={styles.applogo}
                />
            </View>

            <View style={styles.SigninContainer}>
                <Text style={styles.SigninText}>Class Standard</Text>
                <Text style={styles.plainText}>This Application require your class standard as mandatory field</Text>
            </View>

            <View style={styles.main}>
               
                <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select class"
                searchPlaceholder="Search class"
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
             
                />
                <Button
                    title="Continue"
                    onPress={ContinuetoClicked}
                    disabled={!value}
                />

            </View>
        </View>
    );
};

export default ClassStandard;
