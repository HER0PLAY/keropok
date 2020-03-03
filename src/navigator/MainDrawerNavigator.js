import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'

import DashboardScreen from '../screen/Dashboard/DashboardScreen';
import CustomDrawer from '../screen/Dashboard/CustomDrawer';

import utils from '../utils';

const AppNavigator = createDrawerNavigator(

    {
        Dashboard: { screen: DashboardScreen },
    },
    {
        contentComponent: CustomDrawer,
        hideStatusBar: false,
        drawerWidth: utils.MethodUtils.increaseSize(240),

        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default createAppContainer(AppNavigator);