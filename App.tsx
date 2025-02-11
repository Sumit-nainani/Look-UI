/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerifyOtp from './src/components/Auth/VerifyOtp/VerifyOtp';
import UserInfo from './src/components/Auth/UserInfo/UserInfo';
import UserPhone from './src/components/Auth/UserPhone/UserPhone';
import AuthHeader from './src/components/Header/AuthHeader/AuthHeader';
import { AuthHeaderText } from './src/constants/text';
import { AUTH_SCREEN_NUMBER } from './src/constants/common';
import UserGender from './src/components/Auth/UserGender';
import AuthOptions from './src/components/Auth/AuthOptions/AuthOptions';

export type RootStackParamList = {
  AuthOptions: undefined;
  UserInfo: undefined;
  UserGender: undefined;
  UserPhone: undefined;
  VerifyOtp: { phoneNumber: string };
};

const AuthStack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="AuthOptions">
        <AuthStack.Screen
          name="AuthOptions"
          component={AuthOptions}
          options={() => ({
            headerShown: false
          })} />
        <AuthStack.Screen
          name="UserInfo"
          component={UserInfo}
          options={() => ({
            header: () => (
              <AuthHeader
                headerText={AuthHeaderText.CreateAccount}
                authStackTab={AUTH_SCREEN_NUMBER[0].Name}
              />
            ),
          })}
        />
        <AuthStack.Screen
          name="UserGender"
          component={UserGender}
          options={() => ({
            header: () => (
              <AuthHeader
                headerText={AuthHeaderText.CreateAccount}
                authStackTab={AUTH_SCREEN_NUMBER[1].Gender}
              />
            ),
          })}
        />
        <AuthStack.Screen
          name="UserPhone"
          component={UserPhone}
          options={() => ({
            header: () => (
              <AuthHeader
                headerText={AuthHeaderText.CreateAccount}
                authStackTab={AUTH_SCREEN_NUMBER[2].Phone}
              />
            ),
          })}
        />
        <AuthStack.Screen
          name="VerifyOtp"
          component={VerifyOtp}
          options={() => ({
            header: () => (
              <AuthHeader
                headerText={AuthHeaderText.VerifyOtp}
                authStackTab={AUTH_SCREEN_NUMBER[3].VeriftOtp}
              />
            ),
          })}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
