import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FullScrView from "../components/FullScrView/index"
import Libraryscreen from "../screens/Libraryscreen"

import Utils from "../utils/index"
import Config from "../config/index"

const viewWidth = Config.Constant.SCREEN_WIDTH * (Utils.MethodUtils.isTablet() ? 0.65 : 0.85)


class Library extends React.Component {
    render() {
        return (
            <Libraryscreen props={this.props} />
        );
    }
}


const RootStack = createStackNavigator(
    {
        Libraryscreen: Library,
    },
    { headerMode: 'none', },
    {
        initialRouteName: Library,
    },

);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    // static navigationOptions = {
    //     tabBarOptions: {
    //         tabBarVisible: false,
    //         borderTopColor: 'transparent',
    //         activeTintColor: Config.Constant.COLOR_BACKGROUND_AD,
    //         inactiveTintColor: Config.Constant.COLOR_INACTIVE_TINTCOLOR,
    //         labelStyle: {
    //             fontSize: Utils.MethodUtils.increaseSize(13),
    //         },
    //         tabStyle: {
    //             height: Utils.MethodUtils.increaseSize(50),
    //         },
            
    //     },
    //     tabBarIcon: ({ tintColor }) => (
    //         <Image style={{ tintColor: tintColor, height: Utils.MethodUtils.increaseSize(25), width: Utils.MethodUtils.increaseSize(25), }}
    //             source={require('../assets/images/home-Inactive.imageset/home-Inactive.png')} />
    //     ),
    //     borderTopColor: 'transparent',
    // };
    render() {
        return <AppContainer />;
    }
}