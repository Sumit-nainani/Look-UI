import {IROUTES} from '../types/navigation';

export const NavigationComponent = {
  AuthOptions: 'AuthOptions',
  UserInfo: 'UserInfo',
  UserGender: 'UserGender',
  UserPhone: 'UserPhone',
  AppLanding: 'AppLanding',
  VerifyOtp: 'VerifyOtp',
} as const;

export const ROUTES: IROUTES<typeof NavigationComponent> = {
  AuthOptions: NavigationComponent.AuthOptions,
  UserInfo: NavigationComponent.UserInfo,
  UserGender: NavigationComponent.UserGender,
  UserPhone: NavigationComponent.UserPhone,
  AppLanding: NavigationComponent.AppLanding,
  VerifyOtp: NavigationComponent.VerifyOtp,
} as const;
