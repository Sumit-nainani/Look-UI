import { useCallback, useState, useRef, memo } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { VerifyOtpText } from '../../../constants/text';
import styles from './styles';
import { useTimer } from 'react-timer-hook';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AuthStackParamList,IScreenForParams } from '../../../types/navigation';
import { ROUTES } from '../../../constants/routes';

type VerifyOtpProps = RouteProp<
  AuthStackParamList,
  IScreenForParams['VerifyOtp']
>;

const OtpTimer = memo(({ onExpire }: { onExpire: () => void }) => {
    const { seconds, minutes } = useTimer({
        expiryTimestamp: new Date(Date.now() + 10000), // 10 seconds
        onExpire,
    });

    return <Text style={styles.resendText}>{VerifyOtpText.Resend} {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>;
});

const VerifyOtp = () => {
  const navigation = useNavigation();
  const {params} = useRoute<VerifyOtpProps>();

  const otpRef = useRef<string[]>(['', '', '', '']);
  const inputs = useRef<TextInput[]>([]);
  const isEnabled = useRef(false);
  const [reSendCtaShow, setResendCtaShow] = useState(false);
  const userPhone = useSelector(
    (state: any) => state.userInfoReducer.userPhoneNumber,
  );
  console.log(userPhone, 'coming from reducer');
  

    const handleChange = useCallback((text: string, index: number) => {
        otpRef.current[index] = text;
        isEnabled.current = otpRef.current.every((digit) => digit !== '');

        if (text && index < 3) {
            inputs.current[index + 1]?.focus();
        }
    }, []);

    const handleReSendPress = useCallback(() => {
        setResendCtaShow(false);
    }, []);

    console.log('Component Rendered');

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.enterText}>
                    {`${VerifyOtpText.VerifyOtp}${params?.phoneNumber}`}
                </Text>
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
                <TouchableOpacity onPress={handleReSendPress} style={styles.enabledTouchableViewBg}>
                    <Text style={styles.enabledRegisterText}>{VerifyOtpText.ResendOtp}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity 
                    onPress={() => navigation.navigate(ROUTES.UserPhone)}
                    style={isEnabled.current ? styles.enabledTouchableViewBg : styles.disabledTouchableViewBg}
                >
                    <Text style={isEnabled.current ? styles.enabledRegisterText : styles.disabledRegisterText}>
                        {VerifyOtpText.Verify}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default memo(VerifyOtp);
