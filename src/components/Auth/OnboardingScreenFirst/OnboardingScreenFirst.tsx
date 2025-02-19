import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../../../constants/index'
import styles from './styles'
import { OnboardingScreenTwoText } from '../../../constants/text'
import CircularProgress from '../../CircularProgress/CircularProgress'
import { OnboardingScreenFirstText } from '../../../constants/text'

const OnboardingScreenFirst = () => {
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
                        <Image source={Images.OnboardingScreenFirstImageOne} style={styles.OnboardingScreenImageOneStyle}></Image>
                    </View>
                    <View style={styles.childContainer}>
                        <Image source={Images.OnboardingScreenFirstImageTwo} style={styles.OnboardingScreenImageOneStyle}></Image>
                        <View style={styles.BackGroundColorBoxStyleTwo}></View>
                    </View>
                </View>
                <Text style={styles.textContainer}>{OnboardingScreenFirstText.textOne}</Text>
                <Text style={styles.childTextContainer}>{OnboardingScreenFirstText.textTwo}</Text>
            </View>
            <View style={styles.progessBarStyle}>
                <CircularProgress fill={33} rotation={0} navigationScreen={'OnboardingScreenTwo'}/>
            </View>
        </View>
    )
}

export default OnboardingScreenFirst