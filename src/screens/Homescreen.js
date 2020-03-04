import React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, Image, Linking, Share, ScrollView } from 'react-native';

import Utils from "../utils/index"
import Config from "../config/index"
import Component from "../components/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)


export default class Homescreen extends React.Component {
  // static navigationOptions = {
  //   tabBarOptions: {
  //     activeTintColor: Config.Constant.COLOR_BACKGROUND_AD,
  //     inactiveTintColor: Config.Constant.COLOR_INACTIVE_TINTCOLOR,
  //     labelStyle: {
  //       fontSize: 13,
  //     },
  //     tabStyle: {
  //       height: 50,
  //     },
  //   },
  //   tabBarIcon: ({ tintColor }) => (
  //     <Image style={{ tintColor: tintColor, height: 25, width: 25 }}
  //       source={require('../assets/images/home-Inactive.imageset/home-Inactive.png')} />
  //   )
  // };

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `Hey! Try Keropok, the audio emojis you've always hoped for! Don't say bojio! https://play.google.com/store/apps/details?id=com.keropok `,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      // <ScrollView style={{layoutMeasurement: { height: 100, width: '100%' }, flex: 1}}>
        <View style={styles.MainView}>
        <View style={styles.MView}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />

          <View style={styles.ImgView}>
            <Image style={styles.Logo} source={require("../assets/images/Logo.imageset/647.png")} />
          </View>

          <View style={styles.no} />

          <Component.K_Ad_Button
            btnText={Config.String.REMOVE_RESTORE}
            btnWidth={"100%"}
            btnTextPadding={Utils.MethodUtils.increaseSize(12)}
            btnTextSize={Utils.MethodUtils.increaseSize(16)}
            onPress={() => { this.props.props.navigation.navigate('SubscribeToKeropok') }}
            style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
          />

          <Component.K_Button
            btnText={Config.String.INSTALL_KEYBOARD}
            btnWidth={'100%'}
            btnTextPadding={Utils.MethodUtils.increaseSize(12)}
            btnTextSize={Utils.MethodUtils.increaseSize(16)}
            onPress={() => { this.props.props.navigation.navigate('installKeyboard') }}
            style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
          />

          <Component.K_Button
            btnText={Config.String.SHARE_THE_}
            btnWidth={'100%'}
            btnTextPadding={Utils.MethodUtils.increaseSize(12)}
            btnTextSize={Utils.MethodUtils.increaseSize(16)}
            onPress={this.onShare}
            style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
          />

          <Component.K_Button
            btnText={Config.String.SUPPORT}
            btnWidth={'100%'}
            btnTextPadding={Utils.MethodUtils.increaseSize(12)}
            btnTextSize={Utils.MethodUtils.increaseSize(16)}
            onPress={() => Linking.openURL('mailto:keropok.bites@gmail.com?subject=Keropok Application Support&body= ')}
            title="keropok.bites@gmail.com"
            style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
          />

          <View style={styles.Split}>
            <Component.K_Half_Button
              btnText={Config.String.ABOUT}
              btnTextPadding={Utils.MethodUtils.increaseSize(12)}
              btnTextSize={Utils.MethodUtils.increaseSize(16)}
              onPress={() => { //alert('sdd')
                this.props.props.navigation.navigate('AboutKeropok')
              }}
              style={{ marginTop: Utils.MethodUtils.increaseSize(15), justifyContent: 'center' }}
            />

            <Component.K_Half_Button
              btnText={Config.String.FAQ}
              btnTextPadding={Utils.MethodUtils.increaseSize(12)}
              btnTextSize={Utils.MethodUtils.increaseSize(17)}
              onPress={() => { this.props.props.navigation.navigate('FAQs') }}
              style={{ marginTop: Utils.MethodUtils.increaseSize(15), justifyContent: 'center' }}
            />
          </View>

          <View style={{paddingBottom: '4%'}} />

          <Component.K_Button
            btnText={Config.String.TEARMS}
            btnWidth={'100%'}
            btnTextPadding={Utils.MethodUtils.increaseSize(12)}
            btnTextSize={Utils.MethodUtils.increaseSize(16)}
            onPress={() => { this.props.props.navigation.navigate('TermsofService') }}
            style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
          />
           </View>

           <View style={{paddingBottom: '1%'}} />

          <View style={styles.NView}>
            <View style={styles.footer}>
              <Text style={styles.footerTXT}>
                © 2020 Keropok
          </Text>
            </View>
          </View>

          {/* <Text style={{ fontSize: 20, textAlign: 'center', margin: '25%', fontWeight: 'bold', color: 'black' }}> Welcome   </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', color: 'green' }}> Login Sucessful   </Text> */}
       </View>
    );
  }
}
{/* </ScrollView> */}


const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    height: '100%',
    paddingHorizontal: "5%",
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
    justifyContent: 'space-between',
  },
  MView: {
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
    height: '95%',
  },
  NView: {
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
    justifyContent: 'flex-end',
    height: '4%',
  },
  ImgView: {
    marginVertical: 10,
    alignItems: 'center',
  },
  Logo: {
    width: Utils.MethodUtils.increaseSize(100),
    height: Utils.MethodUtils.increaseSize(100),
  },
  no: {
    height: "2%",
  },
  Split: {
    height: '8%',
    flexDirection: "row",
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    height: '5%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
  },
  footerTXT: {
    fontSize: Utils.MethodUtils.increaseSize(13),
    color: Config.Constant.COLOR_BLACK,
    fontFamily: Config.Constant.FONT_AVE_LIGHT
  },
})