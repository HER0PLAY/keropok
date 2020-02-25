import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
// import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import WebView from "../components/WebView/index"
import TabNavigator from "./TabNavigator"

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


class TabNav extends React.Component {
    render() {
        return (
            <TabNavigator />
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
        TabNavigator: TabNav,
        AboutKeropok: About,
        FAQs: FAQ,
        TermsofService: Terms,
    },
    { headerMode: 'none' },
    {
        initialRouteName: 'TabNavigator',
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
    render() {
        return <AppContainer />;
    }
}