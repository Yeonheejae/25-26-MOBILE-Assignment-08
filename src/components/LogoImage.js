import { Image, View, StyleSheet} from 'react-native';

function LogoImage(){
    return(
        <View style={styles.container}>
            <Image
            source={require('../../assets/hjcompany.png')}
            resizeMode="cover"
            style={StyleSheet.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },

    image: {
        width: 200,
        height: 300,
    }
});

export default LogoImage;