/**
 * @format
 */

import {render, screen} from '@testing-library/react-native';
import React from 'react';
import 'react-native';

// Note: test renderer must be required after react-native.
import App from './App';

it('renders correctly', () => {
  render(<App />);
  expect(screen.queryByText('Home!')).toBeOnTheScreen();
  expect(screen.queryByText('Settings!')).not.toBeOnTheScreen();
});
