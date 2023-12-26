import { Image, Text, View } from "react-native";

const AppHeader = (props) => {
    return (
        <View style={{alignItems: "center", marginTop: 25}}>
            <Image
                source={require('./assets/baham_logo.png')}
                style={{width: 100, height: 100}}
                resizeMode="cover"
            />
            <Text style={{fontSize: 24}}>Baham (باہم)</Text>
            <Text style={{fontSize: 24}}>Reducing your carbon footprint...</Text>

        </View>
    );
}

export default AppHeader;