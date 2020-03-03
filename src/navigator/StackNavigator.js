import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WebView from "../components/WebView/index"
import FullScrView from '../components/FullScrView/index'
import Homescreen from "../screens/Homescreen"

import { Image } from 'react-native';

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
            <Homescreen props={this.props} />
        );
    }
}
class About extends React.Component {
    render() {
        return (
            <WebView.KW_About_Keropok props={this.props} />
        );
    }
}
class FAQ extends React.Component {
    render() {
        return (
            <WebView.KW_FAQ props={this.props} />
        );
    }
}
class Terms extends React.Component {
    render() {
        return (
            <WebView.KW_Terms_of_Service props={this.props}/>
        );
    }
}
class PrivacyPoli extends React.Component {
    render() {
        return (
            <WebView.KW_Privacy_Policy props={this.props}/>
        );
    }
}
class installKey extends React.Component {
    render() {
        return (
            <FullScrView.installKeyboard props={this.props}/>
        );
    }
}
class Subscribe extends React.Component {
    render() {
        return (
            <FullScrView.SubscribeToKeropok props={this.props}/>
        );
    }
}



const RootStack = createStackNavigator(
    {
        Homescreen: Home,
        AboutKeropok: About,
        FAQs: FAQ,
        TermsofService: Terms,
        Privacy_Policy: PrivacyPoli,
        installKeyboard: installKey,
        SubscribeToKeropok: Subscribe,
    },
    { headerMode: 'none', },
    {
        initialRouteName: Home,
    },

);

RootStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routs.map(route => {
            if (route.routeName === "AboutKeropok") {
                tabBarVisible = false;
            } else {
                tabBarVisible = true;
            }
        });
    }
    return {
        tabBarVisible
    };
};



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
            tabBarVisible: false,
            borderTopColor: 'transparent',
            activeTintColor: Config.Constant.COLOR_BACKGROUND_AD,
            inactiveTintColor: Config.Constant.COLOR_INACTIVE_TINTCOLOR,
            labelStyle: {
                fontSize: Utils.MethodUtils.increaseSize(13),
            },
            tabStyle: {
                height: Utils.MethodUtils.increaseSize(50),
            },
        },
        tabBarIcon: ({ tintColor }) => (
            <Image style={{ tintColor: tintColor, height: Utils.MethodUtils.increaseSize(25), width: Utils.MethodUtils.increaseSize(25), }}
                source={require('../assets/images/home-Inactive.imageset/home-Inactive.png')} />
        ),
        borderTopColor: 'transparent',
    };
    render() {
        return <AppContainer />;
    }
}