import { View, StyleSheet, Text } from "react-native";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import {KeyboardTypes} from "../components/CustomInput";

function SignUpScreen({navigation}) {

    

    return(
        <View style = {styles.container}>
            <CustomInput
                title = {"아이디"}
                placeholder={"your@email.com"}
                keyboardType={KeyboardTypes.EMAIL}
            />
            <CustomInput
                title = {"비밀번호"}
                placeholder={"비밀번호"}
                keyboardType={KeyboardTypes.DEFAULT}
            />
            <Button onPress={() => navigation.navigate("SignIn")}
                title = {"회원가입 완료"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignUpScreen;