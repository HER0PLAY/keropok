import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TabNavigator from "./TabNavigator"

const MainNavigator = createStackNavigator({
    TabNav: {screen: TabNavigator}
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

export default createAppContainer(MainNavigator);
  