import { View, Text, Image } from 'react-native'
import React from 'react'
import { Images } from '../../../constants/index'
import styles from './style'

const OnboardingScreenThrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ChildContainer}>
        <Image source={Images.OnboardingScreenThridOne} style={styles.OnboardingScreenImageOneStyle}></Image>
        <View style={styles.BackGroundColorBoxStyle}></View>
      </View>
      <View style={styles.ChildContainer}>
        <Image source={Images.OnboardingScreenThridOne} style={styles.OnboardingScreenImageOneStyle}></Image>
        <View style={styles.BackGroundColorBoxStyle}></View>
      </View>
      <View style={styles.ChildContainer}>
        <Image source={Images.OnboardingScreenThridOne} style={styles.OnboardingScreenImageOneStyle}></Image>
        <View style={styles.BackGroundColorBoxStyle}></View>
      </View>
    </View>
  )
}

export default OnboardingScreenThrid