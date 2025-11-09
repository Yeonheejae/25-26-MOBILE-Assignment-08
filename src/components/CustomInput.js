import { View, StyleSheet, TextInput, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

export const KeyboardTypes = {
    DEFAULT: 'default',
    EMAIL: 'email-address',
};

function CustomInput({ title, placeholder, keyboardType, icon, onChangeText}) {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <View style={styles.container}>
            <Text style={[styles.label,
                isFocused ? styles.focusedLabel : styles.label
            ]}>{title}</Text>
            <TextInput
            style={[styles.input,
            isFocused ? styles.focusedInput : styles.input
            ]}
            placeholder={placeholder ?? title}
            placeholderTextColor={'#A3A3A3'}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={keyboardType}
            onFocus={()=> setIsFocused(true)}
            onBlur={()=> setIsFocused(false)}
            onChangeText={onChangeText}
            />
            <View style={styles.icon}>
                <MaterialIcons name={icon} size={20} 
                    color = {isFocused ? "blue" : "#A3A3A3"}
                />
            </View>
        </View>
    );
}

CustomInput.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '80%',
    },

    input: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 42,
        marginBottom: 10,
        paddingLeft: 35,
        borderColor: '#A3A3A3'
    },
    label: {
        marginLeft: 7,
        marginBottom: 2,
        fontSize: 12,
        color: '#A3A3A3'
    },

    icon: {
        position: 'absolute',
        marginTop: 30,
        marginLeft: 10,
    },

    focusedInput: {
        borderColor: 'blue',
        borderWidth: 2,
    },

    focusedLabel: {
        color: 'blue'
    }
});

export default CustomInput;
