import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerifyOtp from '../Auth/VerifyOtp/VerifyOtp';
import UserInfo from '../Auth/UserInfo/UserInfo';
import UserPhone from '../Auth/UserPhone/UserPhone';
import AuthHeader from '../Header/AuthHeader/AuthHeader';
import { AuthHeaderText } from '../../constants/text';
import { AUTH_SCREEN_NUMBER } from '../../constants/common';
import UserGender from '../Auth/UserGender/UserGender';
import AuthOptions from '../Auth/AuthOptions/AuthOptions';
import OnboardingScreenThrid from '../Auth/OnboardingScreenThrid/OnboardingScreenThrid';
import AppLanding from '../AppLanding/AppLanding';
import OnboardingScreenTwo from '../Auth/OnboardingScreenTwo/OnboardingScreenTwo';
import OnboardingScreenFirst from '../Auth/OnboardingScreenFirst/OnboardingScreenFirst';
import Login from '../Auth/Login/index';
import { NavigationStackParamList } from '../../types/navigation';
import { ROUTES } from '../../constants/routes';

const AuthStack = createNativeStackNavigator<NavigationStackParamList>();

const AuthStackComponent: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName={ROUTES.AppLanding}>
      <AuthStack.Screen
        name={ROUTES.AppLanding}
        component={AppLanding}
        options={() => ({
          headerShown: false,
        })}
      />
      <AuthStack.Screen
        name={ROUTES.AuthOptions}
        component={AuthOptions}
        options={() => ({
          headerShown: false,
        })}
      />
      <AuthStack.Screen
        name={ROUTES.OnboardingScreenFirst}
        component={OnboardingScreenFirst}
        options={() => ({
          headerShown: false,
        })}
      />
      <AuthStack.Screen
        name={ROUTES.OnboardingScreenSecond}
        component={OnboardingScreenTwo}
        options={() => ({
          headerShown: false,
        })}
      />
      <AuthStack.Screen
        name={ROUTES.OnboardingScreenThrid}
        component={OnboardingScreenThrid}
        options={() => ({
          headerShown: false,
        })}
      />
      <AuthStack.Screen
        name={ROUTES.UserInfo}
        component={UserInfo}
        options={() => ({
          header: () => (
            <AuthHeader
              showStrip
              headerText={AuthHeaderText.CreateAccount}
              authStackTab={AUTH_SCREEN_NUMBER[0].Name}
            />
          ),
        })}
      />
      <AuthStack.Screen
        name={ROUTES.Login}
        component={Login}
        options={() => ({
          header: () => (
            <AuthHeader
              headerText={AuthHeaderText.Login}
              authStackTab={AUTH_SCREEN_NUMBER[4].Login}
            />
          ),
        })}
      />
      <AuthStack.Screen
        name={ROUTES.UserGender}
        component={UserGender}
        options={() => ({
          header: () => (
            <AuthHeader
              showStrip
              headerText={AuthHeaderText.CreateAccount}
              authStackTab={AUTH_SCREEN_NUMBER[1].Gender}
            />
          ),
        })}
      />
      <AuthStack.Screen
        name={ROUTES.UserPhone}
        component={UserPhone}
        options={() => ({
          header: () => (
            <AuthHeader
              showStrip
              headerText={AuthHeaderText.CreateAccount}
              authStackTab={AUTH_SCREEN_NUMBER[2].Phone}
            />
          ),
        })}
      />
      <AuthStack.Screen
        name={ROUTES.VerifyOtp}
        component={VerifyOtp}
        options={({ route }) => {
          return {
            header: () => (
              <AuthHeader
                showStrip={route.params?.source}
                headerText={AuthHeaderText.VerifyOtp}
                authStackTab={AUTH_SCREEN_NUMBER[3].VerifyOtp}
              />
            ),
          };
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackComponent;
