import { IROUTES } from '../types/navigation';

export const NavigationComponent = {
  AuthOptions: 'AuthOptions',
  OnboardingScreenFirst: 'OnboardingScreenFirst',
  OnboardingScreenSecond: 'OnboardingScreenSecond',
  OnboardingScreenThrid: 'OnboardingScreenThrid',
  UserInfo: 'UserInfo',
  UserGender: 'UserGender',
  UserPhone: 'UserPhone',
  AppLanding: 'AppLanding',
  VerifyOtp: 'VerifyOtp',
  Login: 'Login',
} as const;

export const ROUTES: IROUTES<typeof NavigationComponent> = {
  AuthOptions: NavigationComponent.AuthOptions,
  UserInfo: NavigationComponent.UserInfo,
  UserGender: NavigationComponent.UserGender,
  UserPhone: NavigationComponent.UserPhone,
  AppLanding: NavigationComponent.AppLanding,
  VerifyOtp: NavigationComponent.VerifyOtp,
  OnboardingScreenFirst: NavigationComponent.OnboardingScreenFirst,
  OnboardingScreenSecond: NavigationComponent.OnboardingScreenSecond,
  OnboardingScreenThrid: NavigationComponent.OnboardingScreenThrid,
  Login: NavigationComponent.Login,
} as const;
