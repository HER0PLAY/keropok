import React from 'react';
import {View, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomePage from './HomePage';
import SettingPage from './SettingPage';

const TabNavigator = createBottomTabNavigator({
  Home:{ screen: HomePage},
  Setting: { screen: SettingPage },
});

export default createAppContainer(TabNavigator);