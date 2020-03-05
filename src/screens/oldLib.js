import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList, ListView } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Utils from "../utils/index"
import Config from "../config/index"
import Component from "../components/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

// const data = new Array(
//   "audio",
//   "duration",
//   "file",
//   "audio_id",
// );
// var keyvalue_to_json = JSON.parse(data.keyValues);
// var audio_id = [];
// var audio = [];
// var duration = [];
// var file =[];

export default class Library extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // SplashScreen.hide();
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
         alert(JSON.stringify(responseJson))
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
            onPress={() => { this.props.props.navigation.navigate('searchView') }}
          />
        </View>

        <View style={styles.TagViewHeight}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.MainTagView}>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>All </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>SG </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Mems </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>@#$! </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>SFX </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Cute </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Funny </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Angry </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>NSFW </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>NS </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Hokkine </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Greetings </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>International </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Kids </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Malaysian </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Chinese </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Malay </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Tamil </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Korean </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Thai </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.TitlePopular}> Popular Bites</Text>

        <FlatList
          renderItem={({ data }) => (
        <View style={styles.component}>

          <View style={styles.Play}>
            <TouchableOpacity
              style={styles.playView}>
              <Image
                style={styles.playIMG}
                resizeMode='contain'
                source={
                  require('../assets/images/play.imageset/play.png')
                }
              />
            </TouchableOpacity>
          </View>

          <View style={styles.Song}>
            <View style={styles.SongTitle}>
              <Text style={styles.titleTxt}>
                {/* HUH! YOU DID WHAT */}
                {data.audio}
                {/* {alert(JSON.stringify(data))} */}
              </Text>
            </View>


            <View style={styles.SongDuration}>
              <Text style={styles.DurationTxt}>
                {/* 00:02 */}
                {data.duration}
              </Text>
            </View>
          </View>

          <View style={styles.Share}>
            <TouchableOpacity
              style={styles.ShareView}>
              <Image
                style={styles.ShareIMG}
                resizeMode='contain'
                source={
                  require('../assets/images/Share.imageset/Share.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
       
          )}
        />
        <Text style={styles.TitleAll}> All Bites</Text>
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
    width: '90%',
    alignSelf: 'center'
  },
  MainTagView: {
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
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
  component: {
    height: '9%',
    width: '90%',
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    elevation: 10,
    justifyContent: "space-evenly",
  },
  Play: {
    height: '100%',
    width: '10%',
    justifyContent: "center",
    alignItems: 'center',
    borderTopLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    borderBottomLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
  },
  Song: {
    flexDirection: 'column',
    height: '100%',
    width: '80%',
    justifyContent: "center",
    alignItems: 'center',
  },
  SongTitle: {
    paddingTop: 9,
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
    justifyContent: "center",
    height: '50%',
    width: '80%',
  },
  SongDuration: {
    paddingBottom: 9,
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
    justifyContent: "center",
    height: '50%',
    width: '80%',
  },
  titleTxt: {
    color: Config.Constant.COLOR_SONG_TXT,
    fontFamily: Config.Constant.FONT_AVE_HEAVY,
    fontSize: Utils.MethodUtils.increaseSize(18),
  },
  DurationTxt: {
    color: Config.Constant.COLOR_SBAR_TXT,
    fontFamily: Config.Constant.FONT_AVE_MEDIUM,
    fontSize: Utils.MethodUtils.increaseSize(14),
  },
  Share: {
    height: '100%',
    width: '10%',
    justifyContent: "center",
    alignItems: 'center',
    borderBottomRightRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    borderTopRightRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
  },
  playView: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  playIMG: {
    alignSelf: 'center',
    height: '100%',
    width: 20,
    tintColor: Config.Constant.COLOR_RED400
  },
  ShareView: {
    alignSelf: 'flex-start',
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  ShareIMG: {
    alignSelf: 'center',
    height: '100%',
    width: 23,
    tintColor: Config.Constant.COLOR_RED400
  },
})