// import React from 'react';
// import { View, Text, Button } from 'react-native';

// export default class Login extends React.Component {
//    static navigationOptions = {
//     title: 'Setting',
//     tabBarOptions: {
//       activeBackgroundColor: 'gary',
//       inactiveBackgroundColor: 'white',
//       activeTintColor: '#000000',
//       labelStyle: {
//         fontSize: '200%',
//       },
//     },
//   };
//   render() {
//     return (
//       <View style={{ padding: '20%' }}>
//         <View>
//           <View style={{ margin: '25%' }} />
//           <Button
//             onPress={() => this.props.navigation.navigate('Login')}
//             title="Sign out"
//             color="red"
//           />
//         </View>
//       </View>
//     );
//   }
// }




import React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, Image, ScrollView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import GlobalFont from 'react-native-global-font'

import Utils from "../utils/index"
import Config from "../config/index"
import Component from "../components/index"
import { TouchableOpacity } from 'react-native-gesture-handler';

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class extends React.Component {
  componentDidMount() {
    let fontName = 'Avenir_Heavy'
    GlobalFont.applyGlobal(Avenir_Heavy)
  }
  render() {
    return (
      <View style={styles.MainView}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.sBarView}>
          <Component.K_searchbar
            sBarPlaceHColor={Config.String.SEARCH}
          />
        </View>

        {/* <View style={styles.Padding} /> */}

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
        <Text style={styles.TitleAll}> All Bites</Text>
      </View>
    );
  }
  componentDidMount() {
    SplashScreen.hide();
  }
}

const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  Padding: {
    padding: 10
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
    marginHorizontal: 3
  },
  TagTxt: {
    marginHorizontal: 10,
    paddingVertical: 4,
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
    paddingVertical:15,
  }
})  