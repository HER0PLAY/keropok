import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { WebView } from 'react-native-webview';


import Utils from "../../utils/index"
import Config from "../../config/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class KW_About_Keropok extends React.Component {

  componentDidMount() {
    // SplashScreen.hide();
    fetch('https://dev.3rddigital.com/keropok/api/cms', {
      method: 'POST',
      headers: {
        type: '2',
      },

    }).then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data,
          },
          function () { }
        );

        // alert(JSON.stringify(responseJson))
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.mainView}>

        <View style={styles.closeBTNview}>
          <TouchableNativeFeedback
            style={styles.closeTouchableFeedback}
            background={TouchableNativeFeedback.Ripple('#b1b1b1', true)}
            onPress={() => this.props.navigation.pop()}  >
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

        <WebView style={styles.webView}
          source={{ uri: 'https://reactnative.dev/' }}
          style={{ marginTop: 20 }} />

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
    backgroundColor: '#FDFDFD',
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
  webView: {
    height: '84%',
    backgroundColor: '#EFEFEF',
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