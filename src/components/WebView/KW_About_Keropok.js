import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';

import Utils from "../../utils/index"
import Config from "../../config/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class KW_About_Keropok extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  // componentDidMount() {
  //   // SplashScreen.hide();
  //   fetch('https://dev.3rddigital.com/keropok/api/cms', {
  //     method: 'POST',
  //     headers: {
  //       type: '2',
  //     },

  //   }).then(response => response.json())
  //     .then(responseJson => {
  //       this.setState(
  //         {
  //           isLoading: false,
  //           dataSource: responseJson.data,
  //         },
  //         function () { }
  //       );

  //       // alert(JSON.stringify(responseJson))
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
  render() {
    const htmlContent = '<p>I am keropok, a crunchy, tasty snack.</p><p>Everybody loves me, if you don&#39;t love me, you probably haven&#39;t tried me yet.</p><p>Good things must share with family and friends. I will say hi to them for you.</p>\<p>Thank you!</p>';
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
            About Keropok
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

        <View style={styles.footer}>
          <Text style={styles.footerTXT}>
            © terms and conditions ( Ver 1.0.3 )
          </Text>
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