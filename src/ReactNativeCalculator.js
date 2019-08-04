import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import InputButton from './InputButton';

import styles from './Style';

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
]

export default class reactNativeCalculator extends Component {
  _renderInputButtons() {
    let views = [];
    for (let r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];
      let inputRow = [];
      for (let i = 0; i < row.length; i++) {
        let input = row[i];
        inputRow.push(
          <InputButton value={input} key={`${r}-${i}`} />
        );
      }
      views.push(
        <View style={styles.inputRow} key={`row-${r}`}>{inputRow}</View>
      );
    }
    return views;
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.displayContainer}></View>
        <View style={styles.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    );
  }
}