import { useCallback, useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { UserInfoText, UserPhoneText } from '../../../constants/text'
import { useDispatch,useSelector } from "react-redux";
import { COLORS } from '../../../constants/theme'
import styles from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import axios from "axios";
import { loadAuthData, saveAuthData } from '../../../storage/authStorage'
import { setUserInfo } from '../../../actions/actionPerformer/user';

const API_URL = "https://313f-2401-4900-1cc5-b943-d12d-5d03-9d9f-bf74.ngrok-free.app/register";


type UserPhoneProps = NativeStackScreenProps<RootStackParamList, 'UserPhone'>;

const UserPhone = ({ navigation }: UserPhoneProps) => {

    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('')
    const [isEnabled, setIsEnabled] = useState<boolean>(false)
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();

    const createPost = async () => {
        navigation.navigate('VerifyOtp', { phoneNumber: userPhoneNumber });
        try {
            const newPost = {
                name: "New name",
                phn: `+91${userPhoneNumber}`
            };

            const response = await axios.post(API_URL, newPost);

            if (response.data) {
                saveAuthData({userName:response.data.data.name,userPhoneNumber:response.data.data.phn});
                const userInfo:IUserInfo = await loadAuthData();
                console.log(userInfo);
                dispatch(setUserInfo(userInfo));
            }

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

export default UserPhone