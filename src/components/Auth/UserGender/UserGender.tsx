import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import styles from './styles';
import { UserGenderText } from '../../../constants/text';
import { GENEDER_OPTION } from '../../../constants/common';
import { AuthStackParamList, IScreenForParams } from '../../../types/navigation';
import { ROUTES } from '../../../constants/routes';

type UserGenderProps = RouteProp<AuthStackParamList, IScreenForParams['UserGender']>;

const UserGender: React.FC = () => {
  const { params } = useRoute<UserGenderProps>();
  const navigation = useNavigation();
  const [userGender, setUserGender] = useState<string>('');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (userGender.length && !isEnabled) {
      setIsEnabled(true);
    } else if (!userGender.length) {
      setIsEnabled(false);
    }
  }, [userGender]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.enterText}>{UserGenderText.Gender}</Text>
        {GENEDER_OPTION.map((gender, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.textInputBg, userGender === gender && styles.borderStyletextInputBg]}
            onPress={() => setUserGender(gender)}
          >
            <Text style={styles.inputText}>{gender}</Text>
            <View
              style={[
                styles.radioButtonStyle,
                userGender === gender && styles.selectedRadioButtonStyle,
              ]}
            >
              {userGender === gender && <View style={styles.selectedRadioButtonContainer} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ROUTES.UserPhone, {
            userName: params.userName,
            userGender: userGender,
          })
        }
        style={isEnabled ? styles.enabledTouchableViewBg : styles.disabledTouchableViewBg}
      >
        <Text style={isEnabled ? styles.enabledNextText : styles.disabledNextText}>
          {UserGenderText.Next}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserGender;
