import * as React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
    PixelRatio,
    TextInput,
    StatusBar

} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


import Utils from "../utils/index"
const viewWidth = Dimensions.get('window').width * (Utils.MethodUtils.isTablet() ? 0.1 : 0.9)

//const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {
    static navigationOptions = {
        headerShown: false,
    }
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <View style={{ padding: '1%', height: '100%', /* width: '100%' */ width: viewWidth, alignItems: 'flex-start', }}>
                    <ScrollView style={{
                        padding: '7%',
                        width: Dimensions.get('window').width / 0.55,
                        height: Dimensions.get('window').height / 0.1
                    }}>
                        <View style={{
                            padding: '7%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: "#EDEDED",
                            borderWidth: 2,
                            width: "50%",
                            height: Dimensions.get('window').height / 2.5
                        }}>
                            <Image style={{
                                resizeMode: 'contain',
                                alignSelf: "center", width: '60%'
                            }}

                                source={require('../assets/Images/Logo.png')}
                            />

                            <Text
                                style={{
                                    fontSize: 17,
                                    textAlign: 'center',
                                    paddingBottom: '2%'
                                }}>
                                For Business
                        </Text>

                            <Image style={{
                                width: '100%',
                                height: '40%',
                                backgroundColor: "#EDEDED",
                                alignSelf: 'center',
                            }}
                                source={(require('../assets/Images/main-1.png'))}
                            />

                            <Text
                                style={{
                                    fontSize: 17,
                                    textAlign: 'center',
                                    paddingVertical: '2%'
                                }}>
                                Business Inventory
                        </Text>

                            <Text
                                style={{
                                    fontSize: 10,
                                    textAlign: 'center',
                                    paddingBottom: '2%'
                                }}>
                                Vivamus adipiscing fermentum quam volutpat aliquam. integeret elit eget elit facilisis tristique. Nam vel iaculis mauris.
                        </Text>

                            <TouchableOpacity style={styles.button}
                                onPress={() => { this.props.navigation.navigate('SignupBusiness') }} >
                                <Text style={styles.text}>
                                    Get Started
                                    </Text>
                            </TouchableOpacity>

                            {/* <View style={{ paddingHorizontal: '22%' }}>
                                <Button
                                    onPress={() => { this.props.navigation.push('Login') }}
                                    title="Get Started"
                                    color="#444444"
                                />
                            </View> */}

                            <Text onPress={() => { this.props.navigation.push('Home') }}
                                style={{
                                    color: '#444444',
                                    textAlign: 'center',
                                    textDecorationLine: 'underline',
                                    fontSize: 12,
                                    paddingTop: '2%'
                                }} >
                                Learn More
                        </Text>
                        </View>
                        <View style={{ padding: '2%' }} />

                        <View style={{
                            padding: '7%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: "#EDEDED",
                            borderWidth: 2,
                            width: "50%",
                            height: Dimensions.get('window').height / 2.5
                        }}>
                            <Image style={{
                                resizeMode: 'contain',
                                alignSelf: "center", width: '60%'
                            }}

                                source={require('../assets/Images/Logo.png')}
                            />

                            <Text
                                style={{
                                    fontSize: 17,
                                    textAlign: 'center',
                                    paddingBottom: '2%'
                                }}>
                                For Home
                        </Text>

                            <Image style={{
                                width: '100%',
                                height: '40%',
                                backgroundColor: "#EDEDED",
                                alignSelf: 'center',
                            }}
                                source={(require('../assets/Images/main-2.png'))}
                            />

                            <Text
                                style={{
                                    fontSize: 17,
                                    textAlign: 'center',
                                    paddingVertical: '2%'
                                }}>
                                Home Inventory
                        </Text>

                            <Text
                                style={{
                                    fontSize: 10,
                                    textAlign: 'center',
                                    paddingBottom: '2%'
                                }}>
                                Vivamus adipiscing fermentum quam volutpat aliquam. integeret elit eget elit facilisis tristique. Nam vel iaculis mauris.
                        </Text>

                            <TouchableOpacity style={styles.button}
                                onPress={() => { this.props.navigation.navigate('Signup',{type:"t"}) }} >
                                <Text style={styles.text}>
                                    Start Free Trial
                                    </Text>
                            </TouchableOpacity>

                            {/* <View style={{ paddingHorizontal: '22%' }}>
                            <Button
                                onPress={() => { this.props.navigation.navigate('Login') }}
                                title="Start Free Trial"
                                color="#444444"
                            />
                        </View> */}

                            <Text onPress={() => { this.props.navigation.navigate('Home') }}
                                style={{
                                    color: '#444444',
                                    textAlign: 'center',
                                    textDecorationLine: 'underline',
                                    fontSize: 12,
                                    paddingTop: '2%'
                                }} >
                                Learn More
                        </Text>
                        </View>


                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: Utils.MethodUtils.increaseSize(15),
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#444444',
        paddingVertical: Utils.MethodUtils.increaseSize(10),
        width: "70%",
        justifyContent: "center",
        borderRadius: 4,
    },
})