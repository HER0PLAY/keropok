import React from 'react';
import { StyleSheet, Text, Lable, TouchableOpacity, TextInput, View, Image } from 'react-native';

import Config from "../config/index"
import Utils from "../utils/index"

export default class KSearchbar extends React.Component {
    render() {
        return (
            <View style={styles.sBarView}>

                <TouchableOpacity style={styles.searchImgView}>
                    <Image style={styles.searchImg} source={require("../assets/images/Search.imageset/Search.png")} />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.sBarInput}>
                    <Text style={styles.sBarTXT}>{Config.String.SEARCH}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.searchImgView}>
                    <Image style={styles.searchImg} source={require("../assets/images/ic-clear.imageset/icon.png")} />
                </TouchableOpacity>
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
        justifyContent: 'center',
        backgroundColor: "#ffffff",
    },
    sBarTXT: {
        fontSize: Utils.MethodUtils.increaseSize(17),
        fontFamily: Config.Constant.FONT_AVE_HEAVY,
        color: Config.Constant.COLOR_SBAR_TXT
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
        width: Utils.MethodUtils.increaseSize(23),
        height: Utils.MethodUtils.increaseSize(23),
    },
})