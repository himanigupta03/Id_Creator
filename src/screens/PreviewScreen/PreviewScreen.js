import { View, TextInput, ScrollView, Text, Image} from 'react-native';
import React from 'react';
import Button from '../../components/Button/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';


const PreviewScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const imageUri = route?.params?.data?.image; // access the data

    const SignInClicked = () => {
      navigation.navigate('next screen');
    };

  return (
  
  <ScrollView>
    <View style={styles.body}>

    {imageUri && (
          <View>
            <Image
              source={{uri: imageUri}}
              style={{width: 200, height: 200}}
            />
          </View>
        )}
        
    <View>
    <Text style={styles.textdirection}> Student Name </Text>
    </View>

      <View style={styles.main}>
      <TextInput
      style={styles.input}
      placeholder="name"
      />
      </View>

      <View >
    <Text style={styles.textdirection}> Class </Text>
    </View>

      <View style={styles.main}>
      <TextInput
      style={styles.input}
      placeholder="name"
      />
      </View>

     <View style={styles.main}>
      <Button title="Submit" onPress={SignInClicked}/>
      </View>
      
    </View>
    </ScrollView>
  )
}

export default PreviewScreen;