import { useCallback, useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { UserInfoText, UserPhoneText } from '../../../constants/text'
import { COLORS } from '../../../constants/theme'
import styles from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import axios from "axios";

const API_URL = "http://172.27.16.1:8080/register";


type UserPhoneProps = NativeStackScreenProps<RootStackParamList, 'UserPhone'>;

const UserInfo = ({ navigation }: UserPhoneProps) => {

    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('')
    const [isEnabled, setIsEnabled] = useState<boolean>(false)
    const [posts, setPosts] = useState([]);

    const createPost = async () => {
        navigation.navigate('VerifyOtp', { phoneNumber: userPhoneNumber });
        try {
            const newPost = {
                name: "New name",
                phn: `+91${userPhoneNumber}`
            };

            const response = await axios.post(API_URL, newPost);
            console.log("Post Created:", response.data);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

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
            <TouchableOpacity onPress={() => createPost()} style={isEnabled ? styles.enabledTouchableViewBg : styles.disabledTouchableViewBg}>
                <Text style={isEnabled ? styles.enabledRegisterText : styles.disabledRegisterText}>{UserInfoText.Next}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserInfo