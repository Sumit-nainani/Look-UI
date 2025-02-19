/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import VerifyOtp from './src/components/Auth/VerifyOtp/VerifyOtp';
import UserInfo from './src/components/Auth/UserInfo/UserInfo';
import UserPhone from './src/components/Auth/UserPhone/UserPhone';
import AuthHeader from './src/components/Header/AuthHeader/AuthHeader';
import { AuthHeaderText } from './src/constants/text';
import { AUTH_SCREEN_NUMBER } from './src/constants/common';
import UserGender from './src/components/Auth/UserGender/UserGender';
import AuthOptions from './src/components/Auth/AuthOptions/AuthOptions';
import OnboardingScreenThrid from './src/components/Auth/OnboardingScreenThrid/OnboardingScreenThrid';
import AppLanding from './src/components/AppLanding/AppLanding';
import OnboardingScreenTwo from './src/components/Auth/OnboardingScreenTwo/OnboardingScreenTwo';
import OnboardingScreenFirst from './src/components/Auth/OnboardingScreenFirst/OnboardingScreenFirst';
import { toastConfig } from './toastConfig';

export type RootStackParamList = {
  AuthOptions: undefined;
  UserInfo: undefined;
  UserGender: undefined;
  UserPhone: undefined;
  AppLanding: undefined;
  VerifyOtp: { phoneNumber: string };
};

const AuthStack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="AppLanding">
      <AuthStack.Screen
          name="AppLanding"
          component={AppLanding}
          options={() => ({
            headerShown: false
          })} />
        <AuthStack.Screen
          name="OnboardingScreenFirst"
          component={OnboardingScreenFirst}
          options={() => ({
            headerShown: false
          })} />
          <AuthStack.Screen
          name="OnboardingScreenTwo"
          component={OnboardingScreenTwo}
          options={() => ({
            headerShown: false
          })} />
        <AuthStack.Screen
          name="OnboardingScreenThrid"
          component={OnboardingScreenThrid}
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
                authStackTab={AUTH_SCREEN_NUMBER[3].VerifyOtp}
              />
            ),
          })}
        />
      </AuthStack.Navigator>
      <Toast config={toastConfig}/>
    </NavigationContainer>
  );
}

export default App;
