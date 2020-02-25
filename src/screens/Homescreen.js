import React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, Image } from 'react-native';

import Utils from "../utils/index"
import Config from "../config/index"
import Component from "../components/index"


const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)


export default class Home extends React.Component {
  static navigationOptions = {
    tabBarOptions: {
      activeTintColor: Config.Constant.COLOR_BACKGROUND_AD,
      inactiveTintColor: Config.Constant.COLOR_INACTIVE_TINTCOLOR,
      labelStyle: {
        fontSize: 13,
      },
      tabStyle: {
        height: 50,
      },
    },
    tabBarIcon: ({ tintColor }) => (
      <Image style={{ tintColor: tintColor, height: 25, width:25 }}
        source={require('../assets/images/home-Inactive.imageset/home-Inactive.png')} />
    )
  };
  render() {
    return (
      <View style={styles.MainView}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.ImgView}>
          <Image style={styles.Logo} source={require("../assets/images/Logo.imageset/647.png")} />
        </View>

        <View style={styles.no} />

        <Component.K_Ad_Button
          btnText={Config.String.REMOVE_RESTORE}
          btnWidth={"100%"}
          btnTextPadding={Utils.MethodUtils.increaseSize(12)}
          btnTextSize={Utils.MethodUtils.increaseSize(17)}
          style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
        />

        <Component.K_Button
          btnText={Config.String.INSTALL_KEYBOARD}
          btnWidth={'100%'}
          btnTextPadding={Utils.MethodUtils.increaseSize(12)}
          btnTextSize={Utils.MethodUtils.increaseSize(17)}
          style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
        />

        <Component.K_Button
          btnText={Config.String.SHARE_THE_}
          btnWidth={'100%'}
          btnTextPadding={Utils.MethodUtils.increaseSize(12)}
          btnTextSize={Utils.MethodUtils.increaseSize(17)}
          style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
          onPress={() => this.props.navigation.navigate("TabNavigator")}
        />

        <Component.K_Button
          btnText={Config.String.SUPPORT}
          btnWidth={'100%'}
          btnTextPadding={Utils.MethodUtils.increaseSize(12)}
          btnTextSize={Utils.MethodUtils.increaseSize(17)}
          style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
        />

        <View style={styles.Split}>
          <Component.K_Half_Button
            btnText={Config.String.ABOUT}
            btnTextPadding={Utils.MethodUtils.increaseSize(12)}
            btnTextSize={Utils.MethodUtils.increaseSize(17)}
            onPress={() => this.props.navigation.navigate("About")}
            style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
          />

          <Component.K_Half_Button
            btnText={Config.String.FAQ}
            btnTextPadding={Utils.MethodUtils.increaseSize(12)}
            btnTextSize={Utils.MethodUtils.increaseSize(17)}
            style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
          />
        </View>

        <Component.K_Button
          btnText={Config.String.TEARMS}
          btnWidth={'100%'}
          btnTextPadding={Utils.MethodUtils.increaseSize(12)}
          btnTextSize={Utils.MethodUtils.increaseSize(17)}
          style={{ marginTop: Utils.MethodUtils.increaseSize(15) }}
        />

        {/* <Text style={{ fontSize: 20, textAlign: 'center', margin: '25%', fontWeight: 'bold', color: 'black' }}> Welcome   </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', color: 'green' }}> Login Sucessful   </Text> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#ffffff',
    height: '100%',
    paddingHorizontal: "5%",
  },
  ImgView: {
    marginVertical: 10,
    alignItems: 'center',
  },
  Logo: {
    width: 100,
    height: 100
  },
  no: {
    height: "9%",
  },
  Split: {
    flexDirection: "row",
    justifyContent: 'center',
    justifyContent: 'space-between',
    // backgroundColor:'#d6d5d5'
  }
})