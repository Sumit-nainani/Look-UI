import { useCallback, useState, useRef, memo } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTimer } from 'react-timer-hook';
import { useNavigation } from '@react-navigation/native';
import { RouteProp, useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { connect, ConnectedProps } from 'react-redux';
import axios from 'axios';
import { VerifyOtpText, ToastMessagesText, HttpStatusCode } from '../../../constants/text';
import styles from './styles';
import { AuthStackParamList, IScreenForParams } from '../../../types/navigation';
import { setLocalStorageData } from '../../../storage/authStorage';
import {
  ACCESS_TOKEN,
  API_URL,
  IS_REGISTERED_USER,
  REFRESH_TOKEN,
} from '../../../constants/common';
import { userVerifyOTP } from '../../../actions/actionPerformer/user';

type VerifyOtpProps = RouteProp<AuthStackParamList, IScreenForParams['VerifyOtp']>;

interface Props extends PropsFromRedux {
  userVerifyOTP: () => Promise<any>;
}

const OtpTimer = memo(({ onExpire }: { onExpire: () => void }) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp: new Date(Date.now() + 30000),
    onExpire,
  });

  return (
    <Text style={styles.resendText}>
      {VerifyOtpText.Resend} {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Text>
  );
});

const VerifyOtp: React.FC<Props> = (props: Props) => {
  const { userVerifyOTP } = props;
  const navigation = useNavigation();
  const { params } = useRoute<VerifyOtpProps>();

  const otpRef = useRef<string[]>(['', '', '', '']);
  const inputs = useRef<TextInput[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [reSendCtaShow, setResendCtaShow] = useState(false);

  const handleVerifyOtp = async () => {
    userVerifyOTP(
      { otp: otpRef.current.join(''), phn: `+91${params.phoneNumber}` },
      {
        ConflictHandlingTextOne: ToastMessagesText.OTPMatchTextOne,
        ConflictHandlingTextTwo: ToastMessagesText.OTPMatchTextTwo,
      }
    ).then(async (response) => {
      const { access_token, refresh_token } = response.data.data;
      await setLocalStorageData(REFRESH_TOKEN, refresh_token);
      await setLocalStorageData(ACCESS_TOKEN, access_token);
      //\ naviagte to home
      if (params?.source) {
        Toast.show({
          type: 'success',
          text1: ToastMessagesText.RegistrationSuccessTextOne,
          text2: ToastMessagesText.RegistrationSuccessTextTwo,
        });
        await setLocalStorageData(IS_REGISTERED_USER, IS_REGISTERED_USER);
      }
    });
  };

  const handleChange = useCallback(
    (text: string, index: number) => {
      otpRef.current[index] = text;
      setIsEnabled(otpRef.current.every((digit) => digit !== ''));

      if (text && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    },
    [isEnabled]
  );

  const handleReSendPress = async () => {
    setResendCtaShow(false);
    otpRef.current = ['', '', '', ''];
    inputs.current[0]?.focus();
    try {
      const response = await axios.post(`${API_URL}/resendotp`, {
        phn: `+91${params.phoneNumber}`,
      });
      console.log(response.data, 'response data');
    } catch (error: any) {
      console.log(error.response);
      if (!error.response) {
        Toast.show({
          type: 'error',
          text1: ToastMessagesText.NetworkErrorTextOne,
          text2: ToastMessagesText.NetworkErrorTextTwo,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: ToastMessagesText.InternalServerErrorTextOne,
          text2: error.response?.data?.message || ToastMessagesText.InternalServerErrorTextTwo,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.enterText}>{`${VerifyOtpText.VerifyOtp}${params?.phoneNumber}`}</Text>
        <View style={styles.rowFlex}>
          {otpRef.current.map((key, index) => (
            <TextInput
              key={index}
              ref={(item) => (inputs.current[index] = item!)}
              style={styles.textInputBg}
              keyboardType="numeric"
              maxLength={1}
              defaultValue={key}
              onChangeText={(value) => handleChange(value, index)}
            />
          ))}
        </View>
        <View style={styles.rowFlex}>
          {!reSendCtaShow ? <OtpTimer onExpire={() => setResendCtaShow(true)} /> : null}
        </View>
      </View>
      {reSendCtaShow ? (
        <TouchableOpacity onPress={() => handleReSendPress()} style={styles.enabledTouchableViewBg}>
          <Text style={styles.enabledRegisterText}>{VerifyOtpText.ResendOtp}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => handleVerifyOtp()}
          style={isEnabled ? styles.enabledTouchableViewBg : styles.disabledTouchableViewBg}
        >
          <Text style={isEnabled ? styles.enabledRegisterText : styles.disabledRegisterText}>
            {VerifyOtpText.Verify}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapDispatchToProps = {
  userVerifyOTP,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(memo(VerifyOtp));
