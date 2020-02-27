import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';

import Utils from "../../utils/index"
import Config from "../../config/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class KW_FAQ extends React.Component {

  render() {
    const htmlContent = `<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>Can Keropok access my passwords, credit card numbers, etc?</strong></span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">No. Everything you type using Keropok is yours and yours ONLY whether it&#39;s on Android or iOS.&nbsp;</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>Does Keropok have access to my data?</strong></span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Keropok only tracks anonymized analytics data, </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><em>i.e. </em></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><span style=\"background-color:#fff2cc\"><em>how many times users open our keyboard, which size they use, etc.</em></span></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"> We do not track what the user types. Using analytics is the only way we can understand if things are working or not inside Keropok.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>iOS Warning Message</strong></span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">The following warning message appears when trying to install Keropok on iOS:</span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">&quot;Full access allows the developer of this keyboard to transmit anything you type, including things you have previously typed with this keyboard. This could include sensitive information such as your credit card number or street address&rdquo;.</span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">This message is part of Apple iOS. It appears for any third-party keyboard and is required by Apple.</span></span></span><br />\r\n<br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Keropok </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>DOES NOT</strong></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"> get access to your keystrokes, card number or street address. Your data is stored locally on your phone and is </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>not sent to our servers.</strong></span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>How can I cancel my subscription?</strong></span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">You can cancel your subscription with Keropok anytime through the Apple App Store or Google Play Store settings. View these guides for more help: </span></span></span><a href=\"https://support.apple.com/en-us/HT202039\" style=\"text-decoration:none\"><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#1155cc\"><u>Apple App Store</u></span></span></span></a><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">, </span></span></span><a href=\"https://support.google.com/googleplay/answer/7018481?co=GENIE.Platform%3DAndroid&amp;hl=en\" style=\"text-decoration:none\"><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#1155cc\"><u>Google Play Store</u></span></span></span></a><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>Why can&rsquo;t I send sound bites directly from the Keropok keyboard?</strong></span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Unfortunately due to the technicalities of messaging platforms, we are unable to send sound bites directly :&rsquo;( If you know a solution, please contact us at keropok.bites@gmail.com</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>Why doesn&rsquo;t the Keropok keyboard work for Telegram?</strong></span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Sharing audio bites from our Keropok app to Telegram works, however when it is being shared through our keyboard it doesn&rsquo;t work. Trust us, we&rsquo;re just as upset as you are. We&rsquo;re working hard to get this fixed. If you know anyone that works at Telegram or know how to fix this issue please contact us at keropok.bites@gmail.com</span></span></span></p>s`;
    return (
      <View style={styles.mainView}>

        <View style={styles.closeBTNview}>
          <TouchableNativeFeedback
            style={styles.closeTouchableFeedback}
            background={TouchableNativeFeedback.Ripple('#b1b1b1', true)}
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
            FAQ
          </Text>
        </View>

        {/* <WebView style={styles.webView}
          source={{ uri: 'https://reactnative.dev/' }}
          style={{ marginTop: 20 }} /> */}
          
        <ScrollView >
        <HTMLView
          value={htmlContent}
          style={styles.htmlView}
        />
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: "100%",
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: '2%'
  },
  closeBTNview: {
    height: '7%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingEnd: '2%',
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
  },
  titleTXT: {
    fontSize: 25,
    color: Config.Constant.COLOR_RED400,
    fontFamily: Config.Constant.FONT_AVE_HEAVY
  },
  htmlView: {
    backgroundColor: "#999",
    paddingHorizontal: '1%',
  },
  footer: {
    height: '5%',
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF',
  },
  footerTXT: {
    fontSize: 18,
    color: Config.Constant.COLOR_BLACK,
    fontFamily: Config.Constant.FONT_AVE_LIGHT
  },
})