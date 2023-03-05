import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {calendar} from '../../assets/images';
import Button from '../../components/Button/Button';
import TextInputcomponent from '../../components/TextInput/TextInput';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

const DOB = () => {
  const navigation = useNavigation();
  
  const [dob, setName] = useState('date');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const route = useRoute();
  
  const ContinuetoClicked = () => {
    if (!dob) {
      alert('dob is required');
      return;
    }

    const data = {data: {...route?.params?.data, date}};
    navigation.navigate('Student Photo',data);
    console.log('DOB',data)
  };

  const selecttoClicked = () =>{
    console.log('DOBInput pressed');
    setOpen(true);
  }

 
return (
    <View style={styles.body}>
      <View style={styles.main}>
        <Image source={calendar} resizeMode="contain" style={styles.applogo} />
      </View>

      <View style={styles.SigninContainer}>
        <Text style={styles.SigninText}>DOB</Text>
        <Text style={styles.plainText}>
          This Application require your date of birth
        </Text>
      </View>
      
      <View style={styles.main}>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      
      <TouchableOpacity onPress={selecttoClicked}>
      <TextInputcomponent  
       placeholder="Your date of birth"
       value={date.toDateString()}
       editable={false}
      />
       </TouchableOpacity>
      <Button title="Continue" onPress={ContinuetoClicked} disabled={!dob}/>

      </View>
      </View>
    
  );
};
 
export default DOB;
// <Button title={date.toDateString()} onPress={selecttoClicked}/>
// <Button title="Continue" onPress={ContinuetoClicked} disabled={!dob} />
//Modal
//Button disable enable
//Permissions
//Camera / Gallery Image picker
//Login API integration using fetch function
