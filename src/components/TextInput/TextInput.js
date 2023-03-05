import { Image, View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import { minicalendar } from '../../assets/icons';

const TextInputcomponent = ({value, ...props}) => {
    return (
       <View style={styles.parentContainer} >
        <TextInput style={styles.input} {...props} value={value}/>
        <Image source={minicalendar} resizeMode="contain" style={styles.icon} />
        </View>
    );
};

export default TextInputcomponent;
