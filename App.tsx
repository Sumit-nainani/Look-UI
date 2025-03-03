/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { toastConfig } from './toastConfig';
import AuthStack from './src/components/AuthStack/index';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthStack />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}

export default App;
