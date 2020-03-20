import React, { Component } from 'react'
import { View, Text, Image, StatusBar, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

import Utils from "../../utils/index"
import Config from "../../config/index"
const { width, height } = Dimensions.get('window')

export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={Config.Constant.COLOR_RED400} barStyle="light-content" />
                <Swiper style={styles.wrapper}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.activeDot} />}
                    paginationStyle={{
                        bottom: 70
                    }}
                    loop={false}>

                    <View style={styles.slide}>
                        <View style={styles.AppTitle}>
                            <Text style={styles.AppTitleTXT}>
                                • Keropok •
                            </Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleTXT}>
                                Audio Preview
                            </Text>
                        </View>
                        <View style={styles.settLoc}>
                            <Text style={styles.settLocTXT}>
                                Click on the play button to listen to the sound bites.
                            </Text>
                        </View>
                        <View style={styles.SSview}>
                            <Image style={styles.SSImg}
                                resizeMode='cover'
                                source={require("../../assets/images/Onboarding-1.imageset/Onboarding-1.png")} />
                        </View>
                    </View>

                    <View style={styles.slide}>
                        <View style={styles.AppTitle}>
                            <Text style={styles.AppTitleTXT}>
                                • Keropok •
                            </Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleTXT}>
                                Send Them to your Friends!
                            </Text>
                        </View>
                        <View style={styles.settLoc}>
                            <Text style={styles.settLocTXT}>
                                Click on the share button to share sound bites on all your favourite messsaging platforms like WhatsApp, Telegram, Facebook Messenger!
                            </Text>
                        </View>
                        <View style={styles.SSview}>
                            <Image style={styles.SSImg}
                                resizeMode='cover'
                                source={require("../../assets/images/Onboarding-2.imageset/Onboarding-2.png")} />
                        </View>
                    </View>

                    <View style={styles.slide}>
                        <View style={styles.AppTitle}>
                            <Text style={styles.AppTitleTXT}>
                                • Keropok •
                            </Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleTXT}>
                                Install The Custom Keyboard
                            </Text>
                        </View>
                        <View style={styles.settLoc}>
                            <Text style={styles.settLocTXT}>
                                Send sound bites directly to your friends using our custom keyboard!
                            </Text>
                        </View>
                        <View style={styles.SSview}>
                            <Image style={styles.SSImg}
                                resizeMode='cover'
                                source={require("../../assets/images/Onboarding-3ios.imageset/Onboarding.png")} />
                        </View>
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Config.Constant.COLOR_RED400,
        paddingVertical: '4%'
    },
    slide: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        height: '100%',
        width: "100%",
    },
    AppTitle: {
        height: '7%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Config.Constant.COLOR_RED400,
    },
    AppTitleTXT: {
        fontSize: Utils.MethodUtils.increaseSize(26),
        color: Config.Constant.COLOR_TEXT_AD,
        fontFamily: Config.Constant.FONT_AVE_HEAVY
    },
    title: {
        height: '6%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Config.Constant.COLOR_RED400,
    },
    titleTXT: {
        fontSize: Utils.MethodUtils.increaseSize(22),
        color: Config.Constant.COLOR_TEXT_AD,
        fontFamily: Config.Constant.FONT_AVE_HEAVY
    },
    settLoc: {
        height: '17%',
        width: '85%',
        marginBottom: '7%',
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
        height: '45%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    SSImg: {
        // height: Utils.MethodUtils.increaseSize(280),
        // width: Utils.MethodUtils.increaseSize(230),
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },
    activeDot: {
        backgroundColor: '#fff',
        width: '3%',
        height: '50%',
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },
})