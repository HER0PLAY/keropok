import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, RefreshControl, FlatList, ListView, Share, StatusBar, AppRegistry, TouchableNativeFeedback, ActivityIndicator, PixelRatio, Dimensions, NativeModules, NativeEventEmitter, Platform } from 'react-native';
//import Share from 'react-native-share';
import RNFS from 'react-native-fs';
import SoundPlayer from 'react-native-sound-player'
import Utils from "../utils/index"
import Config from "../config/index"
import Components from "../components/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class Library extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
    this.state = { isDone: false, };
    this.state = { played: '' };
    this.state = { isFetching: false }
    this.onDownloadAudioPress = this.onDownloadAudioPress.bind(this);
  }

  onRefresh() {
    this.setState({ isFetching: true }, () => { this.dataSource() });
    this.setState({ isFetching: true }, () => { this.dataSource() });
  }

  componentDidMount() {
    fetch('https://dev.3rddigital.com/keropok/api/popular_audio', {
      method: 'POST',
      headers: {
        AuthorizationUser: 'eyJpdiI6Iml5aW5UYk9oZzRYcFJ1NkxEZFloTkE9PSIsInZhbHVlIjoiSnFLb3pRdURERjJaOGhUQUgzMklKcU1HaFNjZmlFWXJzbGtHbTE1VnBnQ0lxU1lyVUo3NVpGZndJQjR2THhEVCIsIm1hYyI6ImM4YzVlNWU2M2U3MDM5YmMyYjdkZTdlMjY3ZTMyNTczMjVhYTc4N2RhZWFlNDQ3ZjJiZjhkOTQ4MDk4Y2I4YzgifQ==',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        });  //alert(JSON.stringify(responseJson))
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onShare = async (URL) => {
    var path = `${RNFS.DocumentDirectoryPath}/Share.mp3`
    RNFS.downloadFile({
      fromUrl: URL,
      toFile: path,
    }).promise.then((r) => {
      this.setState({ isDone: true })
    });

    try {
      const result = await Share.share({
        message: path,
        // url: Share.mp3,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  onDownloadAudioPress = async (file, audio) => {
    //setPlayed = (!played)

    RNFS.downloadFile({
      fromUrl: file,
      toFile: `${RNFS.DocumentDirectoryPath}/j.mp3`,
    }).promise.then((r) => {
      this.setState({ isDone: true })
    });

    // if (this.state.play) {
    try {
      // alert(file)
      RNSoundPlayer.playSoundFile('j', 'mp3')
      // SoundPlayer.playUrl(toFile)
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
    // } else {
    //     try {
    //         RNSoundPlayer.pause()
    //     } catch (e) {
    //         console.log(`xyz`, e)
    //     }
    // }
  }

  example = async () => {
    try {
      const response = await changeNavigationBarColor('#80b3ff');
      console.log(response)// {success: true}
    } catch (e) {
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
    // if (this.state.isLoading) {
    //   return (
    //     <View style={{ flex: 1, padding: 20 }}>
    //       <ActivityIndicator />
    //     </View>
    //   )
    // }
    return (
      <View style={styles.MainView}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.sBarView}>
          <Components.K_touchSearchBar
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
          {/* <Components.K_AudioPopular /> */}

            <FlatList
              style={styles.PopularList}
              data={this.state.dataSource}
              keyExtractor={({ audio_id }) => audio_id}>
              renderItem={({ item }) =>
                <View style={styles.component}>

                  <View style={styles.Play}>
                    <TouchableNativeFeedback
                      onPress={() => this.onDownloadAudioPress(item.file, item.audio)}
                      //onPress={() => this.playUrl(item.file, item.audio)}
                      background={TouchableNativeFeedback.Ripple(Config.Constant.COLOR_TOUCHABLENATIVEFEEDBACK, true)}>

                      <View style={styles.playView}>
                        {/* {played ? (
                        <Image
                          style={styles.playIMG}
                          resizeMode='contain'
                          source={
                              require('../assets/images/Pause.imageset/Pause.png')
                          } />
                      ) : ( */}
                        <Image
                          style={styles.playIMG}
                          resizeMode='contain'
                          source={
                            require('../assets/images/play.imageset/play.png')
                          }
                        />
                        {/*  )} */}
                      </View>
                    </TouchableNativeFeedback>
                  </View>

                  <View style={styles.Song}>
                    <View style={styles.SongTitle}>
                      <Text style={styles.titleTxt}>
                        {/* HUH! YOU DID WHAT */}
                        {item.audio}
                      </Text>
                    </View>

                    <View style={styles.SongDuration}>
                      <Text style={styles.DurationTxt}>
                        {/* 00:02 */}
                        {item.duration}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.Share}>
                    <TouchableNativeFeedback
                      style={styles.ShareView}
                      background={TouchableNativeFeedback.Ripple(Config.Constant.COLOR_TOUCHABLENATIVEFEEDBACK, true)}
                      onPress={() => this.onShare(item.file)}
                    >

                      <View style={styles.playView}>
                        <Image
                          style={styles.ShareIMG}
                          resizeMode='contain'
                          source={
                            require('../assets/images/Share.imageset/Share.png')
                          } />
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                </View>} 
              </FlatList>
          </View>

          <Text style={styles.TitleAll}> All Bites</Text>

          <View style={styles.PopularViewList}>
            <Components.K_Audio />
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


  component: {
    height: 70,
    width: '90%',
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    elevation: 7,
    justifyContent: "space-evenly",
    marginBottom: '3%',
    marginTop: '1%'
  },
  PopularList: {
    backgroundColor: Config.Constant.COLOR_BACKGROUND,
  },
  Play: {
    width: '15%',
    height: '83%',
    alignSelf: 'flex-start',
    justifyContent: "center",
    borderTopLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    borderBottomLeftRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
  },
  playView: {
    alignSelf: 'center',
    borderRadius: 100,
    width: '60%',
    height: '60%',
  },
  playIMG: {
    alignSelf: 'center',
    height: '100%',
    width: 20,
    tintColor: Config.Constant.COLOR_RED400
  },
  Song: {
    width: '70%',
    height: '80%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    height: '83%',
    width: '15%',
    justifyContent: "center",
    alignItems: 'center',
    borderBottomRightRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
    borderTopRightRadius: Utils.MethodUtils.isTablet() ? 14 : 7,
  },
  ShareView: {
    alignSelf: 'center',
    borderRadius: 100,
    width: '60%',
    height: '60%',
  },
  ShareIMG: {
    alignSelf: 'center',
    height: '100%',
    width: 23,
    tintColor: Config.Constant.COLOR_RED400
  },
})