/* 
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
  componentDidMount() {
    SplashScreen.hide();
}}
*/









// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// import HomePage from '../screens/Homescreen';
// import Libraryscreen from '../screens/Libraryscreen';

// const TabNavigator = createBottomTabNavigator({
//   Home:{ screen: HomePage},
//   Library: { screen: Libraryscreen },
// });

// export default createAppContainer(TabNavigator);









import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomePage from '../screens/Homescreen';
import Libraryscreen from '../screens/Libraryscreen';

// class HomePage extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class Libraryscreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Library!</Text>
//       </View>
//     );
//   }
// }

const TabNavigator = createBottomTabNavigator({
  Home: HomePage,
  Library: Libraryscreen,
});


export default createAppContainer(TabNavigator);










// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// import TabNavigator from 'react-native-tab-navigator';



/* 
<TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'HomeScreen'}
    title="Home"
    renderIcon={() => <Image source={require("../assets/images/home-Active.imageset/home-Active.PNG")} />}
    renderSelectedIcon={() => <Image source={} />}
    badgeText="1"
    onPress={() => this.setState({ selectedTab: 'HomeScreen' })}>
    {homeView}
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'SettingsScreen'}
    title="SettingsScreen"
    renderIcon={() => <Image source={require("../assets/images/audio-Active.imageset/audio-Active.png")} />}
    renderSelectedIcon={() => <Image source={} />}
    renderBadge={() => <CustomBadgeView />}
    onPress={() => this.setState({ selectedTab: 'SettingsScreen' })}>
    {profileView}
  </TabNavigator.Item>
</TabNavigator> */