import React from 'react';
import { StyleSheet, Text, Lable, TouchableOpacity, TextInput, View, Image } from 'react-native';

import Config from "../config/index"
import Utils from "../utils/index"

export default class KSearchbar extends React.Component {
    render() {
        const width = this.props.sBarhWidth !== undefined ? this.props.sBarhWidth : '100%'
        const color = this.props.sBarColor ? this.props.sBarColor : Config.Constant.COLOR_BACKGROUND
        const shadow = this.props.shadow ? this.props.shadow : Config.Constant.COLOR_SHADOW
        const sBarPlaceHColor = this.props.sBarPlaceHColor ? this.props.sBarPlaceHColor : Config.Constant.COLOR_BACKGROUND_AD
        const sBarTxtSize = this.props.sBarTxtSize ? this.props.sBarTxtSize : Utils.MethodUtils.increaseSize(20)

        return (
            <View style={styles.sBarView}>

                <TouchableOpacity style={styles.searchImgView}>
                    <Image source={require("../assets/images/Search.imageset/Search.png")} />
                </TouchableOpacity>

                <TextInput
                    activeOpacity={0.9}
                    placeholder={Config.String.SEARCH}
                    placeholderTextColor={Config.Constant.COLOR_SBAR_TXT}
                    onChangeText={text => this.setState({ password: text })}
                    style={styles.sBarInput}
                />

                <TouchableOpacity style={styles.searchImgView}>
                    <Image style={styles.searchImg} source={require("../assets/images/ic-clear.imageset/icon.png")} />
                </TouchableOpacity>

                {/* <TextInput
                activeOpacity={0.9}
                onPress={() => this.props.onPress()}
                style={[styles.container, {
                    height: Utils.MethodUtils.increaseSize(55),
                    width: '100%',
                    backgroundColor: color,
                }, this.props.style]}>

                <Text style={{
                    color: sBarColor,
                    fontSize: sBarTxtSize,
                    fontFamily: Config.Constant.FONT_AVE_HEAVY,
                }}
                >{this.props.sBarPlaceHColor}</Text>
            </TextInput> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Utils.MethodUtils.isTablet() ? 10 : 5,
    },
    sBarView: {
        flex: 1,
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