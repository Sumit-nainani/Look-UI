import {NavigationComponent} from '../constants/routes';

interface VerifyOtpParams {
  phoneNumber: string;
}

interface IScreenForParams {
  VerifyOtp: 'VerifyOtp';
}

type NavigationStackParamList = {
  [NavigationComponent.AuthOptions]: undefined;
  [NavigationComponent.UserInfo]: undefined;
  [NavigationComponent.UserGender]: undefined;
  [NavigationComponent.UserPhone]: undefined;
  [NavigationComponent.AppLanding]: undefined;
  [NavigationComponent.VerifyOtp]: {phoneNumber: string};
};

type AuthStackParamList = {
  VerifyOtp: VerifyOtpParams;
};

type IROUTES<T extends Record<string, keyof NavigationStackParamList>> = {
  readonly [K in keyof T]: T[K];
};
