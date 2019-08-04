import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './Style';

export default class InputButton extends Component {
  render() {
    return (
      <View style={styles.inputButton}>
        <Text style={styles.inputButtonText}>{this.props.value}</Text>
      </View>
    );
  }
}