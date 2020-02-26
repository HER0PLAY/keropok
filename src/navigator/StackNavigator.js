import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WebView from "../components/WebView/index"
import TabNavigator from "./TabNavigator"
import KW_About_Keropok from "../components/WebView/KW_About_Keropok"
import Homescreen from "../screens/Homescreen"

import {Image } from 'react-native';

import Utils from "../utils/index"
import Config from "../config/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)


// function TabNav() {
//     return (
//         <TabNavigator />
//     );
// }
// TabNav.navigationOptions = () => ({
//     header: null,
//     color: '#202020'
// });
// function About() {
//     return (
//         <WebView.KW_About_Keropok />
//     );
// }
// function FAQ() {
//     return (
//         <WebView.KW_FAQ />
//     );
// }
// function Terms() {
//     return (
//         <WebView.KW_Terms_of_Service />
//     );
// }


class Home extends React.Component {
    render() {
        return (
            <Homescreen props={this.props}/>
        );
    }
}
class About extends React.Component {
    render() {
        return (
            <WebView.KW_About_Keropok />
        );
    }
}
class FAQ extends React.Component {
    render() {
        return (
            <WebView.KW_FAQ />
        );
    }
}
class Terms extends React.Component {
    render() {
        return (
            <WebView.KW_Terms_of_Service />
        );
    }
}



const RootStack = createStackNavigator(
    {
        Homescreen: Home,
        AboutKeropok: About,
        FAQs: FAQ,
        TermsofService: Terms,
    },
    { headerMode: 'none' },
    {
        initialRouteName: Home,
    }
);

// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="TabNav">
//                 <Stack.Screen name="TabNav" component={TabNav} />
//                 <Stack.Screen name="About" component={About} />
//                 <Stack.Screen name="FAQ" component={FAQ} />
//                 <Stack.Screen name="Terms" component={Terms} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
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
          <Image style={{ tintColor: tintColor, height: 25, width: 25 }}
            source={require('../assets/images/home-Inactive.imageset/home-Inactive.png')} />
        )
      };
    render() {
        return <AppContainer />;
    }
}