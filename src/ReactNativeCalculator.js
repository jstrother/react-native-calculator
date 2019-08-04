import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import InputButton from './InputButton';

import styles from './Style';

const inputButtons = [
  ['C', 'CE', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '+/-', '.', '=']
];

const initialState = {
  inputValue: 0,
  previousInputValue: 0,
  answer: 0,
  selectedSymbol: null,
  isDecimal: false,
}

export default class reactNativeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  _renderInputButtons() {
    let views = [];
    for (let r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];
      let inputRow = [];
      for (let i = 0; i < row.length; i++) {
        let input = row[i];
        inputRow.push(
          <InputButton 
            value={input} 
            key={`${r}-${i}`} 
            onPress={this._onInputButtonPressed.bind(this, input)}
            highlight={this.state.selectedSymbol === input}/>
        );
      }
      views.push(
        <View style={styles.inputRow} key={`row-${r}`}>{inputRow}</View>
      );
    }
    return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input);
      case 'string':
        return this._handleStringInput(input);
    }
  }

  _handleNumberInput(number) {
    this.setState({
      inputValue: this.state.isDecimal ? eval(this.state.inputValue + this.state.selectedSymbol + number) : this.state.inputValue * 10 + number,
      answer: 0,
      isDecimal: false,
    });
  }

  _handleStringInput(string) {
    switch (string) {
      case '/':
      case '*':
      case '-':
      case '+':
        this.setState({
          selectedSymbol: string,
          previousInputValue: this.state.inputValue === 0 ? this.state.answer : this.state.inputValue,
          inputValue: 0,
        });
        break;

      case '%':
        if (this.state.answer > 0) {
          this.setState({
            answer: this.state.answer / 100,
            inputValue: 0,
          })
        } else {
          this.setState({
            inputValue: this.state.inputValue / 100,
            answer: 0,
          });
        }        
        break;

      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) return;

        this.setState({
          previousInputValue: 0,
          inputValue: 0,
          answer: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null,
        });
        break;

      case ".":
        this.setState({
          isDecimal: true,
          selectedSymbol: string,
          previousInputvalue: this.state.inputValue
        });
        break;

      case "+/-":
        if (this.state.inputValue === 0) {
          this.setState({
            answer: -this.state.answer,
          });
        }
        if (this.state.answer === 0) {
          this.setState({
            inputValue: -this.state.inputValue,
          })
        }
        break;

      case 'C':
        // Clears only recent inputValue
        this.setState({
          inputValue: 0,
        });
        break;

      case 'CE':
        // Clear Everything
        this.setState({
          inputValue: 0,
          previousInputValue: 0,
          selectedSymbol: null,
          answer: 0,
          isDecimal: false,
        });
        break;
    }
  }

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{this.state.inputValue === 0 ? this.state.answer : this.state.inputValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    );
  }
}