import { View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';
import { UserProvider } from './contexts/UserContext';

function App() {
    return(
        <UserProvider>
            <NavigationContainer>
                <AuthStack/>
            </NavigationContainer>
        </UserProvider>
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

export default App;