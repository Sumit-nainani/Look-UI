import { NavigationComponent } from '../constants/routes';

interface VerifyOtpParams {
  phoneNumber: string;
}
interface UserGenderParams {
  userName: string;
}
interface UserPhoneParams {
  userName: string;
  userGender: string;
}

interface IScreenForParams {
  VerifyOtp: 'VerifyOtp';
  UserGender: 'UserGender';
  UserPhone: 'UserPhone';
}


type NavigationStackParamList = {
  [NavigationComponent.AuthOptions]: undefined;
  [NavigationComponent.UserInfo]: undefined;
  [NavigationComponent.UserGender]: { userName: string };
  [NavigationComponent.UserPhone]: undefined;
  [NavigationComponent.AppLanding]: undefined;
  [NavigationComponent.VerifyOtp]: { phoneNumber: string };
};

type AuthStackParamList = {
  VerifyOtp: VerifyOtpParams;
  UserGender: UserGenderParams;
  UserPhone: UserPhoneParams;
};

type IROUTES<T extends Record<string, keyof NavigationStackParamList>> = {
  readonly [K in keyof T]: T[K];
};
