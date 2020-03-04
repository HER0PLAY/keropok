import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableNativeFeedback, Platform } from 'react-native';

import Utils from "../../utils/index"
import Config from "../../config/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class searchView extends React.Component {
    render() {
        return (
            <View style={styles.mainView}>

                <View style={styles.sBarView}>

                    <TouchableOpacity
                        style={styles.searchImgView}
                        onPress={() => this.props.props.navigation.pop()}>
                        <Image source={require("../../assets/images/Back.imageset/Back.png")} />
                    </TouchableOpacity>

                    {/* <View style={styles.sBarInputView}> */}
                        <TextInput
                            activeOpacity={0.9}
                            placeholder={Config.String.SEARCH}
                            placeholderTextColor={Config.Constant.COLOR_SBAR_TXT}
                            //onChangeText={text => this.setState({ password: text })}
                            style={styles.sBarInput}
                        />
                    {/* </View> */}

                    <TouchableOpacity style={styles.searchImgView}>
                        <Image style={styles.searchImg} source={require("../../assets/images/ic-clear.imageset/icon.png")} />
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
        backgroundColor: '#FFFFFF',
        paddingHorizontal: '3%',
        paddingTop: '1%',
    },
    sBarView: {
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        borderRadius: 11,
        borderStyle: 'solid',
        borderColor: '#EBEBEB',
        borderWidth: 2.5,
        justifyContent: 'space-evenly'
    },
    sBarInputView: {
        width: '75%',
        height: '100%',
        justifyContent: 'flex-start'
    },
    sBarInput: {
        flex: 1,
        backgroundColor: "#ffffff",
        fontSize: Utils.MethodUtils.increaseSize(17),
        fontFamily: Config.Constant.FONT_AVE_HEAVY,
        color: Config.Constant.COLOR_SHADOW
    },
    searchImgView: {
        height: '100%',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 9,
    },
    searchImg: {
        tintColor: Config.Constant.COLOR_SBAR_CLEAR,
        width: 22,
        height: 22,
    },
})