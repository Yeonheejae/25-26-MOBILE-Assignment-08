import PropTypes from 'prop-types';
import { View, StyleSheet, Pressable, Text } from "react-native";

function Button({title, onPress, marginTop, disabled, isLoading}) {

    return(
        <View style={styles.container}>
            <Pressable style={[styles.button, marginTop={marginTop}]}
            onPress= {onPress}
            disabled={disabled}
            >
                <Text>{title}</Text>
            </Pressable>
        </View>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    marginTop: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    button: {
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: '#27ADFF',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})

export default Button;