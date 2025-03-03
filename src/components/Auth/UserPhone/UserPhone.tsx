import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, ConnectedProps } from 'react-redux';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ToastMessagesText, UserInfoText, UserPhoneText } from '../../../constants/text';
import { COLORS } from '../../../constants/theme';
import styles from './styles';
import { setLocalStorageData } from '../../../storage/authStorage';
import { ROUTES } from '../../../constants/routes';
import { AuthStackParamList, IScreenForParams, UserPhoneParams } from '../../../types/navigation';
import { AUTH_SCREEN_SOURCE, USERINFO } from '../../../constants/common';
import { getUserRegistered } from '../../../actions/actionPerformer/user';
import { HttpStatusCode } from '../../../constants/text';

type UserPhoneProps = RouteProp<AuthStackParamList, IScreenForParams['UserPhone']>;

interface Props extends PropsFromRedux {
  getUserRegistered: () => Promise<any>;
}

const UserPhone: React.FC<Props> = (props: Props) => {
  const { getUserRegistered } = props;
  const {
    params: { userName, userGender },
  } = useRoute<UserPhoneProps>();
  const navigation = useNavigation();
  const [userEnteredPhoneNumber, setUserEnteredPhoneNumber] = useState<string>('');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const handleUserRegistertion = async () => {
    getUserRegistered(
      { name: userName, gender: userGender, phn: `+91${userEnteredPhoneNumber}` },
      {
        PageNotFoundTextOne: ToastMessagesText.RegistrationFailedTextOne,
        PageNotFoundTextTwo: ToastMessagesText.RegistrationFailedTextTwo,
        ConflictHandlingTextOne:ToastMessagesText.UserAlreadyThereTextOne,
        ConflictHandlingTextTwo:ToastMessagesText.UserAlreadyThereTextTwo,
      }
    )
      .then(async (response) => {
        await setLocalStorageData(USERINFO, {
          userName: response.data.name,
          userPhoneNumber: response.data.phn,
        });
        navigation.navigate(ROUTES.VerifyOtp, {
          phoneNumber: userEnteredPhoneNumber,
          source: AUTH_SCREEN_SOURCE.REGISTER,
        });
      })
      .catch((error) => {
        if (error.response.status === HttpStatusCode.ConflictHandling) {
          navigation.navigate(ROUTES.Login);
        }
      });
  };

  useEffect(() => {
    if (userEnteredPhoneNumber.length === 10) {
      setIsEnabled(true);
    } else if (isEnabled) {
      setIsEnabled(false);
    }
  }, [userEnteredPhoneNumber]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.enterText}>{UserPhoneText.WhatPhonenumber}</Text>
        <TextInput
          style={[styles.textInputBg, isEnabled ? styles.textInputValidNumberBg : null]}
          onChangeText={setUserEnteredPhoneNumber}
          value={userEnteredPhoneNumber}
          placeholder={UserPhoneText.EnterNumber}
          placeholderTextColor={COLORS.colorBl}
          keyboardType="numeric"
          maxLength={10}
        />
        <Text style={styles.confirmText}>{UserPhoneText.ConfirmText}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleUserRegistertion()}
        style={isEnabled ? styles.enabledTouchableViewBg : styles.disabledTouchableViewBg}
      >
        <Text style={isEnabled ? styles.enabledRegisterText : styles.disabledRegisterText}>
          {UserInfoText.Next}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = {
  getUserRegistered,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UserPhone);
