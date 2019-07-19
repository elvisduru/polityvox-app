import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation';

import AuthStack from './src/Auth';
import AppStack from './src/App';

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
))

export default AppNavigator;