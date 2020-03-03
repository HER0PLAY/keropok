import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, PixelRatio, Dimensions} from 'react-native';

import Utils from "../utils/index"
const viewWidth = Dimensions.get('window').width * (Utils.MethodUtils.isTablet() ? 0.65 : 1)

export default class MainHeader extends React.Component {
    render() {
        return (
            <View style={styles.headerContainer}>

                <View style={{ backgroundColor: "#ffffff", height: "100%",  }}>
                    <TouchableOpacity style={styles.menuButton} 
                    onPress={this.props.onPressHeaderButton}>
                        <Image
                            style={styles.appIcoImg}
                            source={require("../assets/Images/bars.png")} />
                    </TouchableOpacity>
                </View>


                <View style={{ backgroundColor: "#ffffff", height: "100%", flex:1, alignItems: 'flex-start', justifyContent: 'center', }}>
                    <Image style={styles.titleImage} source={require("../assets/Images/Logo.png")} />
                </View>


                <View style={{ backgroundColor: "#ffffff", height: "100%", width: 50, alignItems: 'center', justifyContent: 'center', }}>
                    <TouchableOpacity style={{ height: "45%",}}>

                        <Image style={styles.notificationIcon}
                            source={require("../assets/Images/notification.png")} />
                        <View style={styles.badgeContainer}>
                            <Text style={styles.badgeText}>5</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: "#ffffff", height: "100%", width: "16%", alignItems: 'center', justifyContent: 'center', }}>
                    <TouchableOpacity style={styles.profileContainer}>
                        <View>
                            <Image style={{ width: 40, height: 40, borderRadius: 20, }} source={require("../assets/Images/rectangle.png")} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        width: viewWidth,
        backgroundColor: "#FFFFFF",
        height: "8%",
        flexDirection: "row",
        borderBottomColor: "#000000",
        alignItems: 'center',
    },
    notchContainer: {
        width: "100%",
        height: StatusBar.currentHeight,
    },
    navigationContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: "4%"
    },
    container: {
        padding: Utils.MethodUtils.increaseSize(10),
        borderRadius: Utils.MethodUtils.increaseSize(3),
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    menuButton: {
        width: Utils.MethodUtils.increaseSize(50),
        height: "80%",
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    titleImage: {
        width: "80%",
        height: "55%",
    },
    appIcoImg: {
        width: Utils.MethodUtils.increaseSize(22),
        height: Utils.MethodUtils.increaseSize(20),
    },
    notificationIcon: {
    //width: Utils.MethodUtils.increaseSize(18),
    //height: Utils.MethodUtils.increaseSize(20),
    
    scaleX: Utils.MethodUtils.increaseSize(0.4),
    scaleY: Utils.MethodUtils.increaseSize(0.4)
    
    //    width: 18,
    //    height:  20,
    },
    badgeText: {
        color: "#ffffff",
        fontSize: 8,
        position: 'absolute',
    },
    badgeContainer: {
        backgroundColor: "#000000",
        color: "#ffffff",
        width: 12,
        height: 12,
        top: Utils.MethodUtils.increaseSize(4),
        right: Utils.MethodUtils.increaseSize(4),
        borderRadius: 6,
        position: 'absolute',
        alignItems: 'center',
    },
    profileContainer: {
        // width: '80%',
        // height: '80%',
        
        scaleX: Utils.MethodUtils.increaseSize(1),
        scaleY: Utils.MethodUtils.increaseSize(1),
        
        justifyContent: 'center',
        alignItems: 'center',
    },
})