import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native';

import Utils from "../../utils/index"
import Config from "../../config/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

export default class About extends React.Component {

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
        <View style={styles.MainView}>
          <Text style={StyleSheet.delete}> Hieelo</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  MainView: {
    height : "100%",
    width: "100%",
    alignItems: 'center'
  },
  delete: {
    color: '#000'
  }
})