import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import Config from "../config/index"
import Utils from "../utils/index"

export default class KButton extends React.Component {
    render() {
        const width = this.props.btnWidth !== undefined ? this.props.btnWidth : '100%'
        const color = this.props.btnColor ? this.props.btnColor : Config.Constant.COLOR_BACKGROUND
        const shadow = this.props.shadow ? this.props.shadow : Config.Constant.COLOR_SHADOW
        const btnTextColor = this.props.btnTextColor ? this.props.btnTextColor : Config.Constant.COLOR_BTN_TEXT
        const btnTextSize = this.props.btnTextSize ? this.props.btnTextSize : Utils.MethodUtils.increaseSize(20)
        const btnTextPadding = this.props.btnTextPadding ? this.props.btnTextPadding : Utils.MethodUtils.increaseSize(8)

        return (
            <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.container, {
                    padding: btnTextPadding,
                    height: Utils.MethodUtils.increaseSize(55),
                    width: '100%',
                    backgroundColor: color,
                    shadowColor: shadow,
                }, this.props.style]}>

                <Text style={{
                    color: btnTextColor,
                    fontSize: btnTextSize,
                    textAlign: 'center',
                    fontFamily: Config.Constant.FONT_AVE_HEAVY
                }}>{this.props.btnText}</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        borderRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 9,
        elevation: 4,
    },

})