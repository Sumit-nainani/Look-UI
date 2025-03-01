import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { Images } from '../../../constants/index';
import styles from './styles';
import { AuthOptionsText } from '../../../constants/text';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants/routes';

const AuthOptions: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.mainScreenBackgroundImage}
        style={styles.imageBackgrondStyle}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.95)', 'rgba(0,0,0,0)']}
          style={styles.gradient}
          start={{ x: 0.5, y: 0.72 }}
          end={{ x: 0.5, y: 0 }}
        >
          <View style={styles.childContainer}>
            <View style={styles.contentStyle}>
              <Text style={styles.bookingTextStyle}>{AuthOptionsText.BookingText}</Text>
              <View style={styles.marginBottom}>
                <TouchableOpacity style={styles.authButton}>
                  <Image source={Images.googleIcon} style={styles.logoStyle}></Image>
                  <Text style={styles.authOptionText}>{AuthOptionsText.GoogleOption}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.authButton}
                  onPress={() => navigation.navigate(ROUTES.UserInfo)}
                >
                  <Image source={Images.phoneIcon} style={styles.logoStyle}></Image>
                  <Text style={styles.authOptionText}>{AuthOptionsText.PhoneOption}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createAccountButton}>
                  <Text style={styles.createAccountText}>{AuthOptionsText.CreateAccount}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.alreadyAccountTextStyle}>{AuthOptionsText.AlreadyAccount}</Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate(ROUTES.Login)}
              >
                <Text style={styles.alreadyAccountTextStyle}>{AuthOptionsText.LoginText}</Text>
              </TouchableOpacity>
              <Text style={styles.termAndServiceTextStyle}>
                {AuthOptionsText.TermAndServiceText}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default AuthOptions;
