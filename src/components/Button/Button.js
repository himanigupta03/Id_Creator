import { View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = ({ title, onPress, disabled=false }) => {
    return (

        <TouchableOpacity 
            style={styles.SigninOpacity}
            onPress={onPress} disabled={disabled}>
            <View style={disabled ? styles.signindirectionDisable : styles.signindirection}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
