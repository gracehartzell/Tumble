import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import Login from '../screens/Login';

import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator (
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Login',
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      }
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarLabel: 'Matches',
      },
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        height: 50,
        backgroundColor: '#fff',
      },
    }
  }
);