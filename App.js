import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';

import SplashScreen from 'react-native-splash-screen'

export default class App extends Component  {
  render(){
  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",}}>
      <Text style={{ color:'#000000'}}> 101010</Text>
    </View>
  )}

  componentDidMount() {
      SplashScreen.hide();
  }
}