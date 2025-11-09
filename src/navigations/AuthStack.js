import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen'
import ListScreen from "../screens/ListScreen";

const AuthStack = () => {

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName='Sign in'>
            <Stack.Screen name='Sign in' component={SignInScreen}/>
            <Stack.Screen name='List' component={ListScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack;