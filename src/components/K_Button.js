import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Config from "../config/index"
import Utils from "../utils/index"

export default class KButton extends React.Component {
    render() {
        const height = this.props.btnHeight !== undefined ? this.props.btnHeight : '8%'
        const width = this.props.btnWidth !== undefined ? this.props.btnWidth : '90%'
        const color = this.props.btnColor ? this.props.btnColor : Config.Constant.COLOR_BACKGROUND
        const shadow = this.props.shadow ? this.props.shadow : Config.Constant.COLOR_SHADOW
        const btnTextColor = this.props.btnTextColor ? this.props.btnTextColor : Config.Constant.COLOR_BTN_TEXT
        const btnTextSize = this.props.btnTextSize ? this.props.btnTextSize : Utils.MethodUtils.increaseSize(20)
        const btnTextPadding = this.props.btnTextPadding ? this.props.btnTextPadding : Utils.MethodUtils.increaseSize(0)

        return (
           // <View style= {{paddingVertical: 10}}>
            <TouchableOpacity
                activeOpacity={0.95}
                onPress={() => this.props.onPress()}
                style={[styles.container, {
                    padding: btnTextPadding,
                    height: height,
                    width: width,
                    backgroundColor: color,
                    shadowColor: shadow,
                    alignSelf: 'center',
                    justifyContent: 'center',
                }, this.props.style]}>

                <Text style={{
                    color: btnTextColor,
                    fontSize: btnTextSize,
                    textAlign: 'center',
                    fontFamily: Config.Constant.FONT_AVE_HEAVY
                }}>{this.props.btnText}</Text>
            </TouchableOpacity>
         //   </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        borderRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
        shadowOffset: { width: 0, height: 0 },
        marginTop: 5,
        shadowRadius: 9,
        elevation: 4,
    },

})