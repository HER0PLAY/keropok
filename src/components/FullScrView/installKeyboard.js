import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableNativeFeedback, Platform } from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings'

import Utils from "../../utils/index"
import Config from "../../config/index"
import Component from "../index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class KW_About_Keropok extends React.Component {
    render() {
        return (
            <View style={styles.mainView}>

                <StatusBar backgroundColor={Config.Constant.COLOR_RED400} barStyle="light-content" />

                <View style={styles.closeBTNview}>
                    <TouchableNativeFeedback
                        style={styles.closeTouchableFeedback}
                        background={TouchableNativeFeedback.Ripple(Config.Constant.COLOR_TOUCHABLENATIVEFEEDBACK, true)}
                        onPress={() => this.props.props.navigation.pop()}
                    >
                        <View style={styles.closeTouchable}>
                            <Image style={styles.closeImg}
                                source={require("../../assets/images/Close.imageset/Close.png")} />
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titleTXT}>
                        • Install Keyboard •
                    </Text>
                </View>

                <View style={styles.settLoc}>
                    <Text style={styles.settLocTXT}>
                        Go to setting > Additional Setting > Language & input > Current Keyboard > Keropok
                    </Text>
                </View>

                <View style={styles.SSview}>
                    <Image style={styles.SSImg}
                        source={ /* Platform === 'android' ? */ require("../../assets/images/InstallKeyboard.imageset/InstallKeyboard_android2.png")
                                    /* : require("../../assets/images/InstallKeyboard.imageset/InstallKeyboard_ios2.png") */ } />
                </View>
                <View style={{paddingBottom: '4%'}} />
                    <Component.K_Button
                        btnText={Config.String.ENABLE_KEYBOARD}
                        btnWidth={"80%"}
                        btnHeight= {"7%"}
                        btnTextSize={Utils.MethodUtils.increaseSize(16)}
                        style={{  marginTop: Utils.MethodUtils.increaseSize(15) }}
                        onPress={() =>AndroidOpenSettings.inputMethodSettings()}
                    />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        width: "100%",
        backgroundColor: Config.Constant.COLOR_RED400,
        //justifyContent: 'center',
        paddingHorizontal: '2%'
    },
    closeBTNview: {
        height: '7%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: '2%',
        backgroundColor: Config.Constant.COLOR_RED400,
    },
    closeTouchable: {
        height: '70%',
        width: '10%',
        alignItems: 'center',
        justifyContent: "center",
    },
    closeImg: {
        tintColor: Config.Constant.COLOR_TEXT_AD
    },
    title: {
        height: '4%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Config.Constant.COLOR_RED400,
    },
    titleTXT: {
        fontSize: Utils.MethodUtils.increaseSize(26),
        color: Config.Constant.COLOR_TEXT_AD,
        fontFamily: Config.Constant.FONT_AVE_HEAVY
    },
    settLoc: {
        height: '20%',
        width: '75%',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Config.Constant.COLOR_RED400,
    },
    settLocTXT: {
        fontSize: Utils.MethodUtils.increaseSize(16),
        textAlign: 'center',
        color: Config.Constant.COLOR_TEXT_AD,
        fontFamily: Config.Constant.FONT_AVE_MEDIUM
    },
    SSview: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },
    SSImg: {
        height: Utils.MethodUtils.increaseSize(280),
        width: Utils.MethodUtils.increaseSize(230),
    },
})