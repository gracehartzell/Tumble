import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
  }
);

class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator/>;
  }
}

export default RootNavigator;