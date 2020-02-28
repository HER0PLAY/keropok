import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableNativeFeedback, Platform } from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings'

import Subscription from './Subscription'

import Utils from "../../utils/index"
import Config from "../../config/index"
import Component from "../index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)



export default class KW_About_Keropok extends React.Component {
    render() {

        requestPurchase = async (sku= string) => {
            try {
              await RNIap.requestPurchase(sku, false);
            } catch (err) {
              console.warn(err.code, err.message);
            }
          }
         
          requestSubscription = async (sku= string) => {
            try {
              await RNIap.requestSubscription(sku);
            } catch (err) {
              console.warn(err.code, err.message);
            }
          }
        return (
            <View style={styles.mainView}>

                <StatusBar backgroundColor={Config.Constant.COLOR_BACKGROUND} barStyle="dark-content" />

                <View style={styles.closeBTNview}>
                    <TouchableNativeFeedback
                        style={styles.closeTouchableFeedback}
                        background={TouchableNativeFeedback.Ripple('#b1b1b1', true)}
                        onPress={() => this.props.props.navigation.pop()}>

                        <View style={styles.closeTouchable}>
                            <Image style={styles.closeImg}
                                source={require("../../assets/images/Close.imageset/Close.png")} />
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titleTXT}>
                        {Config.String.SUBSCRIBE}
                    </Text>
                </View>

                <View style={styles.ImgView}>
                    <Image style={styles.Logo} source={require("../../assets/images/Logo.imageset/647.png")} />
                </View>

                <View style={styles.settLocHello}>
                    <Text style={styles.settLocTXT}>
                        Hello!
                    </Text>
                </View>

                <View style={styles.settLoc}>
                    <Text style={styles.settLocTXT}>
                        The ads very annoying is it? Paiseh ah, I got no butt to sell, this is the only way i can survive.
                    </Text>
                </View>

                <View style={styles.settLoc}>
                    <Text style={styles.settLocTXT}>
                        Keep me alive, get access to 100+ premium sounds and remove all ads by subscribing
                    </Text>
                </View>

                <View style={styles.EnableKey}>
                    <Component.K_Ad_Button
                        btnText={Config.String.SUBSCRIBE}
                        btnTextPadding={Utils.MethodUtils.increaseSize(12)}
                        btnTextSize={Utils.MethodUtils.increaseSize(17)}
                        onPress={() => alert('Keropok is ₹120.00/month')}
                       // onPress={ this.requestPurchase(product.productId)}
                    />
                </View>

                <View style={styles.settLoc}>
                    <Text style={styles.settLocTXT}>
                        Keropok is ₹120.00/month. Cancel anytime.
                    </Text>
                </View>

                <View style={styles.lineView}>
                    <View style={styles.line}/> 
                    </View>

                <View style={styles.last}>
                    <TouchableOpacity onPress={() => { this.props.props.navigation.navigate('TermsofService') }}>
                        <Text style={styles.settLocTXT}>
                            Terms of Service
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.props.navigation.navigate('Privacy_Policy') }}>
                        <Text style={styles.settLocTXT}>
                            Peivacy Policy
                    </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        width: "100%",
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
        //justifyContent: 'center',
        paddingHorizontal: '2%',
    },
    closeBTNview: {
        height: '7%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: '2%',
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    closeTouchable: {
        height: '70%',
        width: '10%',
        alignItems: 'center',
        justifyContent: "center",
    },
    closeImg: {
    },
    title: {
        height: '4%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    titleTXT: {
        fontSize: Utils.MethodUtils.increaseSize(26),
        color: Config.Constant.COLOR_RED400,
        fontFamily: Config.Constant.FONT_AVE_HEAVY
    },
    ImgView: {
        marginVertical: 10,
        alignItems: 'center',
    },
    Logo: {
        width: Utils.MethodUtils.increaseSize(100),
        height: Utils.MethodUtils.increaseSize(100),
    },
    settLoc: {
        height: '8%',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    settLocHello: {
        height: '7%',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    settLocTXT: {
        fontSize: Utils.MethodUtils.increaseSize(15),
        textAlign: 'left',
        color: Config.Constant.COLOR_BLACK,
        fontFamily: Config.Constant.FONT_AVE_MEDIUM
    },
    SSview: {
        height: '50%',
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },
    SSImg: {
        height: Utils.MethodUtils.increaseSize(350),
        width: Utils.MethodUtils.increaseSize(287),
    },
    EnableKey: {
        paddingTop: '13%',
        height: '13%',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    last: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        height: '5%',
        alignSelf: 'center',
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    lineView: {
        height: '2%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Config.Constant.COLOR_BACKGROUND,
    },
    line: {
        borderStyle: 'solid',
        borderColor: Config.Constant.COLOR_SBAR_TXT,
        borderWidth: 0.6,
    },
})