import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View, Image } from 'react-native';

import Config from "../../config/index"
import Utils from "../../utils/index"

export default class KSearchbar extends React.Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.sBarView}>

                    <TouchableOpacity style={styles.searchImgView}>
                        <Image source={require("../../assets/images/Search.imageset/Search.png")} />
                    </TouchableOpacity>

                    <TextInput
                        activeOpacity={0.9}
                        placeholder={Config.String.SEARCH}
                        placeholderTextColor={Config.Constant.COLOR_SBAR_TXT}
                        //onChangeText={text => this.setState({ password: text })}
                        style={styles.sBarInput}
                    />

                    <TouchableOpacity style={styles.searchImgView}>
                        <Image style={styles.searchImg} source={require("../../assets/images/ic-clear.imageset/icon.png")} />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Utils.MethodUtils.isTablet() ? 10 : 5,
    },
    mainView: {
        height: '100%',
        width: "100%",
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
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

