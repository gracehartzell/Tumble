import React from 'react';
import styles from '../styles'

import { 
  Text, 
  View,
} from 'react-native';

class NoCards extends React.Component {
  render() {
    return (
      <View>
        <Text>All gone...Time to go to sleep!</Text>
      </View>
    )
  }
}

export default NoCards