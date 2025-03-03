import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ToastMessagesText, UserInfoText, UserPhoneText } from '../../../constants/text';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { COLORS } from '../../../constants/theme';
import styles from './styles';
import { setLocalStorageData } from '../../../storage/authStorage';

import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants/routes';
import { USERINFO } from '../../../constants/common';
import { getUserLogin } from '../../../actions/actionPerformer/user';
import { HttpStatusCode } from '../../../constants/text';

interface Props extends PropsFromRedux {
  getUserLogin: () => Promise<any>;
}

const Login: React.FC<Props> = (props: Props) => {
  const { getUserLogin } = props;
  const navigation = useNavigation();
  const [loginPhoneNumber, setLoginPhoneNumber] = useState<string>('');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    getUserLogin(
      { phn: `+91${loginPhoneNumber}` },
      {
        UnauthorizedTextOne: ToastMessagesText.LoginFailedTextOne,
        UnauthorizedTextTwo: ToastMessagesText.LoginFailedTextTwo,
      }
    ).then(async (response) => {
      await setLocalStorageData(USERINFO, {
        userName: response.data.name,
        userPhoneNumber: response.data.phn,
      });
      navigation.navigate(ROUTES.VerifyOtp, {
        phoneNumber: loginPhoneNumber,
      });
    }).catch((error) => {
      if (error.response.status === HttpStatusCode.Unauthorized) {
        navigation.navigate(ROUTES.AuthOptions);
      }
    });
  };

  useEffect(() => {
    if (loginPhoneNumber.length === 10) {
      setIsEnabled(true);
    } else if (isEnabled) {
      setIsEnabled(false);
    }
  }, [loginPhoneNumber]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.enterText}>{UserPhoneText.WhatPhonenumber}</Text>
        <TextInput
          style={[styles.textInputBg, isEnabled ? styles.textInputValidNumberBg : null]}
          onChangeText={setLoginPhoneNumber}
          value={loginPhoneNumber}
          placeholder={UserPhoneText.EnterNumber}
          placeholderTextColor={COLORS.colorBl}
          keyboardType="numeric"
          maxLength={10}
        />
        <Text style={styles.confirmText}>{UserPhoneText.ConfirmText}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleLogin()}
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
  getUserLogin,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Login);
