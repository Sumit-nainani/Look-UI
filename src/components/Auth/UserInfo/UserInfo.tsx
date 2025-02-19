import {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {UserInfoText} from '../../../constants/text';
import {COLORS} from '../../../constants/theme';
import styles from './styles';
import {ROUTES} from '../../../constants/routes';
import {useNavigation} from '@react-navigation/native';

const UserInfo = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>('');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (userName.length && !isEnabled) {
      setIsEnabled(true);
    } else if (!userName.length) setIsEnabled(false);
  }, [userName]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.enterText}>{UserInfoText.EnterDetails}</Text>
        <TextInput
          style={styles.textInputBg}
          onChangeText={setUserName}
          value={userName}
          placeholder={UserInfoText.EnterName}
          placeholderTextColor={COLORS.colorBl}
          keyboardType="default"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.UserGender,{userName:userName})}
        style={
          isEnabled
            ? styles.enabledTouchableViewBg
            : styles.disabledTouchableViewBg
        }>
        <Text
          style={
            isEnabled ? styles.enabledRegisterText : styles.disabledRegisterText
          }>
          {UserInfoText.Next}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
