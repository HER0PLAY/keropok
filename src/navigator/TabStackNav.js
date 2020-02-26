// import * as React from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';

// import Homescreen from "../screens/Homescreen"
// import StackNavigator from './StackNavigator'
// import {Image } from 'react-native';

// import Utils from "../utils/index"
// import Config from "../config/index"

// const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)

// class Home extends React.Component {
//     render() {
//         return (
//             <Homescreen props={this.props}/>
//         );
//     }
// }
// class StackNav extends React.Component {
//     render() {
//         return (
//             <StackNavigator props={this.props}/>
//         );
//     }
// }



// const RootStack = createStackNavigator(
//     {
//         Homescreen: Home,
//         StackNavigator: StackNav,
//     },
//     { headerMode: 'none' },
//     {
//         initialRouteName: Home,
//     }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//     static navigationOptions = {
//         tabBarOptions: {
//           activeTintColor: Config.Constant.COLOR_BACKGROUND_AD,
//           inactiveTintColor: Config.Constant.COLOR_INACTIVE_TINTCOLOR,
//           labelStyle: {
//             fontSize: 13,
//           },
//           tabStyle: {
//             height: 50,
//           },
//         },
//         tabBarIcon: ({ tintColor }) => (
//           <Image style={{ tintColor: tintColor, height: 25, width: 25 }}
//             source={require('../assets/images/home-Inactive.imageset/home-Inactive.png')} />
//         )
//       };
//     render() {
//         return <AppContainer />;
//     }
// }