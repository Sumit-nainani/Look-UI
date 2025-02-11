import { useCallback, useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { UserInfoText, UserPhoneText } from '../../../constants/text'
import { COLORS } from '../../../constants/theme'
import styles from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

type UserPhoneProps = NativeStackScreenProps<RootStackParamList, 'UserPhone'>;

const UserInfo = ({ navigation }: UserPhoneProps) => {

    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('')
    const [isEnabled, setIsEnabled] = useState<boolean>(false)

    useEffect(() => {
        if (userPhoneNumber.length === 10) {
            setIsEnabled(true);
        } else if (isEnabled) {
            setIsEnabled(false);
        }
    }, [userPhoneNumber])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.enterText}>
                    {UserPhoneText.WhatPhonenumber}
                </Text>
                <TextInput
                    style={[styles.textInputBg, isEnabled ? styles.textInputValidNumberBg : null]}
                    onChangeText={setUserPhoneNumber}
                    value={userPhoneNumber}
                    placeholder={UserPhoneText.EnterNumber}
                    placeholderTextColor={COLORS.colorBl}
                    keyboardType='numeric'
                    maxLength={10}
                />
                <Text style={styles.confirmText}>
                    {UserPhoneText.ConfirmText}
                </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('VerifyOtp', { phoneNumber: userPhoneNumber })} style={isEnabled ? styles.enabledTouchableViewBg : styles.disabledTouchableViewBg}>
                <Text style={isEnabled ? styles.enabledRegisterText : styles.disabledRegisterText}>{UserInfoText.Next}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserInfo