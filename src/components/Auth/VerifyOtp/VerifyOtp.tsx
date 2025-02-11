import { useCallback, useEffect, useState, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import CountDown from 'react-native-countdown-component';
import { UserInfoText, UserPhoneText, VerifyOtpText } from '../../../constants/text'
import { COLORS } from '../../../constants/theme'
import styles from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useTimer } from 'react-timer-hook';

type VerifyOtpProps = NativeStackScreenProps<RootStackParamList, 'VerifyOtp'>;

const VerifyOtp = ({ navigation, route }: VerifyOtpProps) => {

    const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
    const inputs = useRef<TextInput[]>([]);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [reSendCtaShow, setResendCtaShow] = useState(false);

    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    const { seconds, minutes, restart } = useTimer({
        expiryTimestamp: time,
        onExpire: () => setResendCtaShow(true)
    });

    const handleChange = useCallback((text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputs.current[index + 1]?.focus();
        }
    }, [otp]);

    const handleReSendPress = useCallback(() => {
        setResendCtaShow(false);
        const newTime = new Date();
        newTime.setSeconds(newTime.getSeconds() + 10);
        restart(newTime)
    }, [reSendCtaShow])

    useEffect(() => {
        setIsEnabled(otp.every((digit) => digit !== ''))
    }, [otp])


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.enterText}>
                    {`${VerifyOtpText.VerifyOtp}${route?.params?.phoneNumber}`}
                </Text>
                <View style={styles.rowFlex}>
                    {otp.map((key, index) => (
                        <TextInput
                            key={index}
                            ref={(item) => (inputs.current[index] = item!)}
                            style={styles.textInputBg}
                            keyboardType="numeric"
                            maxLength={1}
                            value={key}
                            onChangeText={value => handleChange(value, index)}
                        />
                    ))}
                </View>
                <View style={styles.rowFlex}>

                    {!reSendCtaShow ? <Text style={styles.resendText}>
                        {VerifyOtpText.Resend}{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </Text> : null}

                </View>
            </View>
            {reSendCtaShow ? <TouchableOpacity onPress={handleReSendPress} style={styles.enabledTouchableViewBg}>
                <Text style={styles.enabledRegisterText}>{VerifyOtpText.ResendOtp}</Text>
            </TouchableOpacity> : <TouchableOpacity onPress={() => navigation.navigate('UserPhone')} style={isEnabled ? styles.enabledTouchableViewBg : styles.disabledTouchableViewBg}>
                <Text style={isEnabled ? styles.enabledRegisterText : styles.disabledRegisterText}>{VerifyOtpText.Verify}</Text>
            </TouchableOpacity>}

        </View>
    )
}

export default VerifyOtp