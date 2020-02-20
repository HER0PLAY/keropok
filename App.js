import React from 'react';
import SplashScreen from 'react-native-splash-screen'

import TabNavigator from "./src/navigator/TabNavigator"

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <TabNavigator />
    )
  }
}





// import React from 'react';
// import SplashScreen from 'react-native-splash-screen'
// import { View, Text, Button } from 'react-native';

// import MainNavigator from "./src/navigator/MainNavigator"
// import Components from "./src/components/index"

//  export default class App extends React.Component {
//   render() {
//     return (
//     //   <View >
//     //    <Text style={{ color: '#000',}}>Home!</Text>
//     // </View>
//        <Components style={{flex: 1}}>
//          <MainNavigator />
//        </Components>
//     )
//   }
//   componentDidMount() {
//     SplashScreen.hide();
//   }
// }

// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// import HomePage from './src/screens/Homescreen';
// import Libraryscreen from './src/screens/Libraryscreen';

// const TabNavigator = createBottomTabNavigator({
//   Home:{ screen: HomePage},
//   Library: { screen: Libraryscreen },
// });

// export default createAppContainer(TabNavigator);







// import React from 'react';
// import { Text, View } from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>  
//       </View>
//     );
//   }
// }

// const TabNavigator = createBottomTabNavigator({
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
// });

// export default createAppContainer(TabNavigator);







// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import SplashScreen from 'react-native-splash-screen'

// import TabNavigator from "./src/navigator/TabNavigator"

// const MainNavigator = createStackNavigator({
//     TabNav: {screen: TabNavigator}
// }, {
//     headerMode: 'none',
//     navigationOptions: {
//       headerVisible: false,
//     }
// });

// export default createAppContainer(MainNavigator);