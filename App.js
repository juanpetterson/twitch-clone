import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

const App = () => (
  <NavigationNativeContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <Routes />
  </NavigationNativeContainer>
);

export default App;
