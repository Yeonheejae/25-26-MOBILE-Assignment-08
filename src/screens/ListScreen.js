import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ListScreen({navigation}) {
    useEffect(() => {
        navigation.setOptions({
            title: '업데이트된 홈 타이틀'
        })
    })

    return(
        <View style = {styles.container}>
            <Text>하하</Text>
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

export default ListScreen;