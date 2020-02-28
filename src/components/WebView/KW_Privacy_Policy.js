import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';

import Utils from "../../utils/index"
import Config from "../../config/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class KW_Privacy_Policy extends React.Component {

  render() {
    const htmlContent = `<h1><span style=\"font-size:20pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Privacy Policy of Keropok</span></span></span></h1>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Keropok collects some Personal Data from its users.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>DATA COLLECTED</strong></span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Among the types of Personal Data that this Application collects, by itself or through third parties, there are: unique device identifiers for advertising (Google Advertiser ID or IDFA, for example); geographic position; Cookies; Usage Data; Storage permission; Contacts permission; Precise location permission (non-continuous); Approximate location permission (non-continuous); general activity data; country; Data communicated while using the service; device logs; device information.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application. Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Any use of Cookies &ndash; or of other tracking tools &ndash; by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party&#39;s consent to provide the Data to the Owner.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Keropok </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><span style=\"background-color:#ffffff\"><strong>DOES NOT</strong></span></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><span style=\"background-color:#ffffff\"> get access to your keystrokes, card number or street address. Your data is stored locally on your phone and is </span></span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>not sent to our servers.</strong></span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>SECURITY</strong></span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Keropok values your trust in providing us with your Personal Information, thus we strive to use commercially acceptable means of protecting it. But no method of transmission over the Internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>CHILDREN&rsquo;S PRIVACY</strong></span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">These Services do not address anyone under the age of 13. Keropok does not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary action.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>CHANGES TO THIS PRIVACY POLICY</strong></span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Keropok reserves the right to </span></span></span><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><span style=\"background-color:#ffffff\">make changes to this privacy policy at any time by giving notice to its Users on this page and possibly within this Application and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.&nbsp;</span></span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><span style=\"background-color:#ffffff\">Should the changes affect processing activities performed on the basis of the User&rsquo;s consent, the Owner shall collect new consent from the User, where required.</span></span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\"><strong>CONTACT</strong></span></span></span><br />\r\n<span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">If you have any questions or suggestions about Keropok&rsquo;s Privacy Policy, contact us at </span></span></span><a href=\"mailto:keropok.bites@gmail.com\" style=\"text-decoration:none\"><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#1155cc\"><u>keropok.bites@gmail.com</u></span></span></span></a><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">.</span></span></span></p>\r\n\r\n<p><span style=\"font-size:12pt\"><span style=\"font-family:Arial\"><span style=\"color:#000000\">Latest Update: 13 Jan 2020.</span></span></span></p>`;
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
          Privacy Policy
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