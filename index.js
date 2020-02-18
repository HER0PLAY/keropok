/**
 * @format
 */

import SplashScreen from 'react-native-splash-screen'
import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './src/screens/HomeTemp';
// import App from './src/navigator/TabNavigator';
import App from './src/screens/Libraryscreen';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
