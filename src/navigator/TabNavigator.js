import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Libraryscreen from '../screens/Libraryscreen';

import StackNavigator from './StackNavigator'
import StackNavLib from './StackNavLib'
  
const TabNavigator = createBottomTabNavigator({
  Home: StackNavigator,
  Library: StackNavLib,
});


export default createAppContainer(TabNavigator);
































// import * as React from 'react';
// import { Text, View, Image } from 'react-native';
// import { NavigationContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { MaterialCommunityIcons } from 'react-native-vector-icons';

// import Home from "../screens/Homescreen"
// import Library from "../screens/Libraryscreen"

// function Homescreen() {
//   return (
//     <Home />
//   )
// }
// function Libraryscreen() {
//   return (
//     <Library />
//   )
// }

// const Tab = createBottomTabNavigator(

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Homescreen"
//       tabOptions={{
//         activeTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Homescreen"
//         component={Homescreen}
//         options={{
//           tabBarLabel: 'Home',
//            tabBarIcon: ({ color, size }) => (
//              <MaterialCommunityIcons name="home" color={color} size={size} />
//           // <Image style={{}}
//           //   source={require('../assets/images/home-Active.imageset/home-Active.png')} />
//            )
//         }}
//       />
//       <Tab.Screen
//         name="Libraryscreen"
//         component={Libraryscreen}
//         options={{
//           tabBarLabel: 'Library',
//            tabBarIcon: ({ color, size }) => (
//              <MaterialCommunityIcons name="bell" color={color} size={size} />
//           // <Image style={{}}
//           //   source={require('../assets/images/audio-inactive.imageset/audio-inactive.png')} />
//            )
//         }}
//       />
//     </Tab.Navigator>
//   );
// });

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs/>
//     </NavigationContainer>
//   );
// }


























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