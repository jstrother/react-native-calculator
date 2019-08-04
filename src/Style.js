import {StyleSheet} from 'react-native';

export default {
  rootContainer: {
    flex: 1,
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#193441',
    justifyContent: 'center',
  },
  displayText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20,
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#3e606f',
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91aa9d',
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  inputButtonHighlighted: {
    backgroundColor: '#193441'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
}