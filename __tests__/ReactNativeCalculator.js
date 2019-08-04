import 'react-native';
import React from 'react';
import ReactNativeCalculator from '../src/ReactNativeCalculator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ReactNativeCalculator />);
});