import { useCallback, useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { UserInfoText } from '../../../constants/text'
import { COLORS } from '../../../constants/theme'
import styles from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';

type UserInfoProps = NativeStackScreenProps<RootStackParamList, 'UserInfo'>;

const UserInfo = ({ navigation }: UserInfoProps) => {

    const [userName, setUserName] = useState<string>('')
    const [isEnabled, setIsEnabled] = useState<boolean>(false)

    useEffect(() => {
        if (userName.length && !isEnabled) {
            setIsEnabled(true);
        } else if (!userName.length) (
            setIsEnabled(false)
        )
    }, [userName])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.enterText}>
                    {UserInfoText.EnterDetails}
                </Text>
                <TextInput
                    style={styles.textInputBg}
                    onChangeText={setUserName}
                    value={userName}
                    placeholder={UserInfoText.EnterName}
                    placeholderTextColor={COLORS.colorBl}
                    keyboardType='default'
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('UserGender')} style={isEnabled ? styles.enabledTouchableViewBg : styles.disabledTouchableViewBg}>
                <Text style={isEnabled ? styles.enabledRegisterText : styles.disabledRegisterText}>{UserInfoText.Next}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserInfo