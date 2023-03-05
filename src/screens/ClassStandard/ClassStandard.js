import { View, Text, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import { classstandard } from '../../assets/images';
import Button from '../../components/Button/Button';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

const ClassStandard = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState(null);
    const [classesData, setClassesData] = useState();
    const route = useRoute();

    useEffect(() => {
        fetchClasseData();
      }, []);

    const callApi = async (url, method, data) => {
        return await fetch(url, {
          method: method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: data,
        });
      };

      const fetchClasseData = async () => {
        const response = await callApi('https://impressads.in/api/classes', 'GET');
    
        const json = await response.json();
        setClassesData(json);
      };

    const ContinuetoClicked = () => {

        if (!value) {
            alert('your class standard is required');
            return;
        }

        const data = {data: {...route?.params?.data, value}};
        navigation.navigate('Select Section',data);
        console.log('class',data);
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
                data={classesData}
                search
                maxHeight={300}
                labelField="name"
                valueField="id"
                placeholder="Select class"
                searchPlaceholder="Search class"
                value={value}
                onChange={item => {
                    setValue(item.id);
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
