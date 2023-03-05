import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { applogo } from '../../assets/images';
import Button from '../../components/Button/Button';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../components/Loader/Loader';

const Signin = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("arshimemorial@gmail.com");
    const [password, setPassword] = useState("12345678");
    const [loading, setLoading] = useState(false);
    
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

      const signInUser = async () => {
        setLoading(true);
        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
    
        const response = await callApi(
          'https://impressads.in/api/school/login',
          'POST',
          formData,
        );
    
        const json = await response.json();
        console.log(json);
        if (json?.status) {
          navigation.navigate('Studentname',{data: {user_id: json.user_info.id}});
        } else {
          alert(json?.message);
        }
        setLoading(false);
      };

    const SignInClicked = () => {
        if (!email) {
            alert('email cannot be empty');
            return;
        }

        if (!password) {
            alert('password cannot be empty');
            return;
        }

       // navigation.navigate('Studentname');
       signInUser();
    };

    return (

        <View style={styles.body}>

            <View style={styles.main}>
                <Image
                    source={applogo}
                    resizeMode="contain"
                    style={styles.applogo}
                />
            </View>

            <View style={styles.SigninContainer}>
                <Text style={styles.SigninText}>Sign In</Text>
                <Text style={styles.plainText}>Enter your email address and password to access your accoount</Text>
            </View>

            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={str => setEmail(str)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={str => setPassword(str)}
                />

                <Button title="Sign In" onPress={SignInClicked} disabled={!email && !password}/>
                <Loader visible={loading} />
            </View>
        </View>
    );
};

export default Signin;
