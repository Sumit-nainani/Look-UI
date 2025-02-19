import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native';
import { Images } from '../../../constants/index'
import styles from './styles'
import { OnboardingScreenThridText } from '../../../constants/text'

const OnboardingScreenThrid = () => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <View style={styles.childContainer}>
            <Image source={Images.OnboardingScreenThridOne} style={styles.OnboardingScreenImageOneStyle}></Image>
            <View style={styles.BackGroundColorBoxStyle}></View>
          </View>
          <View style={styles.childContainer}>
            <View style={styles.BackGroundColorBoxStyleOne}></View>
            <Image source={Images.OnboardingScreenThridTwo} style={styles.OnboardingScreenImageOneStyle}></Image>
          </View>
          <View style={styles.childContainer}>
            <Image source={Images.OnboardingScreenThridThrid} style={styles.OnboardingScreenImageOneStyle}></Image>
            <View style={styles.BackGroundColorBoxStyleTwo}></View>
          </View>
        </View>
        <Text style={styles.textContainer}>{OnboardingScreenThridText.ManageText}</Text>
        <Text style={styles.childTextContainer}>{OnboardingScreenThridText.NormalText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.getStartedButton} onPress = {() => navigation.navigate('UserInfo')}>
          <Text style={styles.getStartedText}>{OnboardingScreenThridText.GetStarted}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnboardingScreenThrid