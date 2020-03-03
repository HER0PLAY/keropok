import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView, AppRegistry, ScrollView, Dimensions, StatusBar } from 'react-native';

import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import DashboardScr from './screens/Dashboard';
import JobsScr from './screens/Jobs';
import InviteUserScr from './screens/InviteUsers';
import CustomersScr from './screens/Customers';
import EstimatesScr from './screens/Estimates';
import ScanScr from './screens/Scan';
import SettingsScr from './screens/Settings';
import PricingScr from './screens/Pricing';
import LogoutScr from './screens/Logout';
import CustomDrawer from '../navigator/CustomDrawer';

/*
export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}
*/

/* const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}}>
    <View style={{ height : 70, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('./components/image/Logo.png')}
          style={{height:70, width:100}}></Image>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
) */



class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image
              source={require('./components/image/drawer.png')}
              style={{ width: 25, height: 25, marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
        <View>
        </View>
      </SafeAreaView>
    );
  }
}



/* const Dashboard = createStackNavigator({
  First: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
     // title: 'Red ',
      headerPressColorAndroid: 'red',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: { 
        height: 80
      },
     // headerTintColor: 'red',
    }),
  },
});
 */

/* const DrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  }
}, {
  contentComponent: CustomDrawer, // Pass here
  // others props
  drawerBackgroundColor: 'rgba(255,255,255,.9)',
  overlayColor: 'rgba(0,0,0,0.5)',
  contentOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#6b52ae',
  },
}); */



const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardScr,
    navigationOptions: /* ({ navigation }) => ( */{
      headerShown: false,
      /*  headerLeft: <NavigationDrawerStructure navigationProps={navigation} />, */
    },
  },
  Jobs: {
    screen: JobsScr,
    navigationOptions: {
      headerShown: false,
    },
  },
  InviteUser: {
    screen: InviteUserScr,
    navigationOptions: {
      headerShown: false,
    },
  },
  Customers: {
    screen: CustomersScr,
    navigationOptions: {
      headerShown: false,
    },
  },
  Estimates: {
    screen: EstimatesScr,
    navigationOptions: {
      headerShown: false,
    },
  },
  Scan: {
    screen: ScanScr,
    navigationOptions: {
      headerShown: false,
    },
  },
  Settings: {
    screen: SettingsScr,
    navigationOptions: {
      headerShown: false,
    },
  },
  Pricing: {
    screen: PricingScr,
    navigationOptions: {
      headerShown: false,
    },
  },
  Logout: {
    screen: LogoutScr,
    navigationOptions: {
      headerShown: false,
    },
  },
});

AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);
export default createAppContainer(AppDrawerNavigator);



















// import React, { Component } from 'react';
// import {View,Text, Image, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';

// import { createAppContainer,} from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';

// import Dashboard from './screens/Dashboard';
// import ScreenOne from './screens/ScreenOne';
// import ScreenTwo from './screens/ScreenTwo';
// /* 
// const DrawerNavigator = createDrawerNavigator({
//   dash: Dashboard,
//   One: ScreenOne,
//   Two: ScreenTwo,
// });
//  */
// class NavigationDrawerStructure extends Component {
//   toggleDrawer = () => {
//     this.props.navigationProps.toggleDrawer();
//   };
//   render() {
//     return (
//       <SafeAreaView>
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           <Image
//             source={require('./components/image/drawer.png')}
//             style={{ width: 25, height: 25, marginLeft: 15 }}
//           />
//         </TouchableOpacity>
//       </View>
//       <View>
//       </View>
//       </SafeAreaView>
//     );
//   }
// }

// const FirstActivity_StackNavigator = createStackNavigator({
//   First: {
//     screen: Dashboard,
//     navigationOptions: ({ navigation }) => ({
//      // title: 'Red ',
//      headerTitle: (
//        <View style={{width: Dimensions.get('window').width / 2.3, height: Dimensions.get('window').height / 20, justifyContent:'flex-start', alignItems: 'center',}}>
//         <Image 
//             source={require('./components/image/Logo.png')}
//             style={{height: Dimensions.get('window').height / 22, width: Dimensions.get('window').width / 2,  }}
//         />
//         </View>
//       ),
//       headerTitle: (
//         <View style={{width: Dimensions.get('window').width / 1.5, height: Dimensions.get('window').height / 20, justifyContent:'flex-end', alignItems: 'flex-end',}}>
//          <Image 
//              source={require('./components/image/Bell-64.png')}
//              style={{height: Dimensions.get('window').height / 30, width: Dimensions.get('window').width / 15,  }}
//          />
//          </View>
//        ),
//       headerPressColorAndroid: 'red',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: { 
//         height: 80
//       },
//      // headerTintColor: 'red',
//     }),
//   },
// });



// const DrawerNavigatorExample = createDrawerNavigator({
//   Dashboard: {
//     screen: FirstActivity_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Dasboard 🔥 ',

//     },
//   },

// });


// export default createAppContainer(DrawerNavigatorExample);
