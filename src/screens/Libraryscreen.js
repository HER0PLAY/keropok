import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native';

import Utils from "../utils/index"
import Config from "../config/index"
import Component from "../components/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class Library extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // SplashScreen.hide();
    fetch('https://dev.3rddigital.com/keropok/api/cms', {
      method: 'POST',
      headers: {
        type: 'eyJpdiI6Iml5aW5UYk9oZzRYcFJ1NkxEZFloTkE9PSIsInZhbHVlIjoiSnFLb3pRdURERjJaOGhUQUgzMklKcU1HaFNjZmlFWXJzbGtHbTE1VnBnQ0lxU1lyVUo3NVpGZndJQjR2THhEVCIsIm1hYyI6ImM4YzVlNWU2M2U3MDM5YmMyYjdkZTdlMjY3ZTMyNTczMjVhYTc4N2RhZWFlNDQ3ZjJiZjhkOTQ4MDk4Y2I4YzgifQ==',
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
      <Image style={{ tintColor: tintColor, height: '83%', width: '15%' }}
        source={require('../assets/images/audio-inactive.imageset/audio-inactive.png')} />
    )
  };




  render() {
    return (
      <View style={styles.MainView}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.sBarView}>
          <Component.K_searchbar
            sBarPlaceHColor={Config.String.SEARCH}
          />
        </View>

        <View style={styles.TagViewHeight}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.MainTagView}>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>SG</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Mems</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>@#$!</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>SFX</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Cute</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Funny</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Angry</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>NSFW</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>NS</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Hokkine</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Greetings</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>International</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Kids</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Malaysian</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Chinese</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Malay</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Tamil</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Korean</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.Tags}>
              <TouchableOpacity>
                <Text style={styles.TagTxt}>Thai</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.TitlePopular}> Popular Bites</Text>
        <Component.K_Audio />


        {/* <View>
          <FlatList
            renderItem={({ item, index }) => (
             <Component.K_Audio />
            )}
          />
        </View> */}


        <Text style={styles.TitleAll}> All Bites</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#ffffff',
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
    backgroundColor: '#fff',
  },
  Tags: {
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: '#EBEBEB',
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
})