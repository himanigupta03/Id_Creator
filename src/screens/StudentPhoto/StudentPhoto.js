import {View, Text, Image,TouchableOpacity,ImagePicker} from 'react-native';
import React, {useState} from 'react';
import {camera} from '../../assets/images';
import Button from '../../components/Button/Button';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const StudentPhoto = () => {
  const navigation = useNavigation();
  const [selectimage, setUri] = useState();
  const route = useRoute();

  
  const pickImage = async () => {
    try {
    const result = await launchImageLibrary({
      //   maxHeight: 200,
      //   maxWidth: 200,
    });
    // console.log(result);
    setUri(result?.assets[0]?.uri); // optional chaining
  } catch (error) {
    console.log('please select image',error);
 }
};

const getImage = async () => {
  const result = await launchCamera({
    
  });
  console.log(result);
  setUri(result?.assets[0]?.uri);// optional chaining
};

  const ContinuetoClicked = () => {

    const data = {data: {...route?.params?.data,  image: selectimage}};
    navigation.navigate('Preview Screen',{data});
    console.log(data);

  };
  
  return (
    <View style={styles.body}>
      <View style={styles.main}>
        <Image
          source={selectimage ? {uri: selectimage} : camera}
          resizeMode="contain"
          style={styles.applogo}
        />
      </View>

      <View style={styles.SigninContainer}>
        <Text style={styles.SigninText}>Student Photo</Text>
        <Text style={styles.plainText}>
          This Application require your image as mandatory
        </Text>
      </View>

      <TouchableOpacity onPress={pickImage}>
        <View>
          <Text>Pick Image from Gallery</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={getImage}>
        <View>
         <Text> Click your image </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.main}>
        <Button title="Continue" onPress={ContinuetoClicked} />
      </View>
    </View>
  );
};

export default StudentPhoto;

//JS Concepts
//Priomise or Async await
//Login API integration using fetch function

//Himani
//1. Convert button into TextInput
//2. Make a compoennt of TextInput as Button.
//3. Make right icon in text input
//4. Display image from camera in android
//5 Make final Preview Screen
// 6 . Configure Macbook
