import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList, ListView } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Utils from "../utils/index"
import Config from "../config/index"
import Component from "../components/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class Library extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('https://dev.3rddigital.com/keropok/api/audio', {
      method: 'POST',
      headers: {
        type: 'eyJpdiI6Iml5aW5UYk9oZzRYcFJ1NkxEZFloTkE9PSIsInZhbHVlIjoiSnFLb3pRdURERjJaOGhUQUgzMklKcU1HaFNjZmlFWXJzbGtHbTE1VnBnQ0lxU1lyVUo3NVpGZndJQjR2THhEVCIsIm1hYyI6ImM4YzVlNWU2M2U3MDM5YmMyYjdkZTdlMjY3ZTMyNTczMjVhYTc4N2RhZWFlNDQ3ZjJiZjhkOTQ4MDk4Y2I4YzgifQ==',
      },
      // body: JSON.stringify({
      //   "audio": this.state.title,
      //   "duration": this.state.duration,
      //   "file": this.state.data,
      // })
    }).then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data,
          },
          function () {
            data = responseJson
          }
        );
        //alert(JSON.stringify(responseJson))
      })
      .catch(error => {
        console.error(error);
      });
  }

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