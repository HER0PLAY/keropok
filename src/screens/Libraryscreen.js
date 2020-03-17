import React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, NativeModules, Platform, Image, ScrollView, RefreshControl, FlatList, ListView } from 'react-native';

import Utils from "../utils/index"
import Config from "../config/index"
import Component from "../components/index"

// const {NavigationBarColor} = NativeModules;

// const changeNavigationBarColor = (
//   color = String,
//   light = false,
//   animated = true,
// ) => {
//   if (Platform.OS === 'android') {
//     const LightNav = light ? true : false;
//     NavigationBarColor.changeNavigationBarColor(color, LightNav, animated);
//   }
// };

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class Library extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isFetching: false }
  }

  onRefresh() {
    this.setState({ isFetching: true },  ()=> { this.dataSource() });
    this.setState({ isFetching: true },  ()=> { this.dataSource() });
  }

  example = async () => {
    try{
        const response = await changeNavigationBarColor('#80b3ff');
        console.log(response)// {success: true}
    }catch(e){
        console.log(e)// {success: false}
    }

};

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
      <Image style={{ tintColor: tintColor, height: 25, width: 31 }}
        source={require('../assets/images/audio-inactive.imageset/audio-inactive.png')} />
    )
  };


  render() {
    return (
      <View style={styles.MainView}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.sBarView}>
          <Component.K_touchSearchBar
            sBarPlaceHColor={Config.String.SEARCH}
            onPress={() => { this.props.props.navigation.navigate('searchView') }} />
        </View>

        <View style={styles.TagViewHeight}>
          <Component.K_AudioCategory />
        </View>

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={() => this.onRefresh()}
              tintColor="red"
            />
          }
          showsVerticalScrollIndicator={false}
          style={styles.MainTagView}>
          <Text style={styles.TitlePopular}> Popular Bites</Text>

          <View style={styles.PopularViewList}>
            <Component.K_AudioPopular />
          </View>

          <Text style={styles.TitleAll}> All Bites</Text>

          <View style={styles.PopularViewList}>
            <Component.K_Audio />
          </View>
        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
    height: '100%',
    width: '100%',
  },
  sBarView: {
    height: 55,
    marginTop: 7,
    width: "90%",
    alignSelf: 'center',
  },
  TagViewHeight: {
    height: '10%',
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center'
  },
  Tags: {
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
    flexDirection: 'row',
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: Config.Constant.COLOR_TAG_BORDER,
    borderWidth: 1.5,
    alignSelf: 'center',
    marginHorizontal: 3,
  },
  TagTxt: {
    marginHorizontal: 10,
    paddingVertical: 2,
    color: Config.Constant.COLOR_BACKGROUND_AD,
    fontSize: Utils.MethodUtils.increaseSize(18),
    fontFamily: Config.Constant.FONT_AVE_MEDIUM,
    paddingHorizontal: 10
  },
  TitlePopular: {
    marginHorizontal: '3%',
    color: Config.Constant.COLOR_BLACK,
    fontSize: Utils.MethodUtils.increaseSize(17),
    fontFamily: Config.Constant.FONT_AVE_HEAVY,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  TitleAll: {
    marginHorizontal: '3%',
    color: Config.Constant.COLOR_BLACK,
    fontSize: Utils.MethodUtils.increaseSize(17),
    fontFamily: Config.Constant.FONT_AVE_HEAVY,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  PopularViewList: {
    width: '100%',
  },
})