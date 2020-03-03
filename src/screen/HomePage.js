import React from 'react';
import { View, Text, } from 'react-native';
import {createAppContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation';

export default class extends React.Component {
   static navigationOptions = {
    title: 'Home',
    tabBarOptions: {
      activeBackgroundColor: 'gary',
      inactiveBackgroundColor: 'white',
      activeTintColor: '#000000',
      labelStyle: {
     //   fontSize: '200%',
      },
    },
  };
  render() {
    const { navigation } = this.props;
    const userName = navigation.getParam('userName');
    const passWord = navigation.getParam('passWord');
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{fontSize: 20, textAlign: 'center', margin: '25%', fontWeight: 'bold'}}>
          Welcome
        </Text>
        <Text
          style={{fontSize: 20, textAlign: 'center', margin: '25%', color:'green' }}>
          Login Sucessful 
        </Text>
      </View>
    );
  }
}
