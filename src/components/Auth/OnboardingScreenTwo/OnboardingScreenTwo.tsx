import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../../../constants/index'
import styles from './styles'
import { OnboardingScreenTwoText } from '../../../constants/text'
import CircularProgress from '../../CircularProgress/CircularProgress'

const OnboardingScreenTwo = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View>
                    <View style={styles.childContainer}>
                        <View style={styles.BackGroundColorBoxStyle}></View>
                        <Image source={Images.OnboardingScreenTwoOne} style={styles.OnboardingScreenImageOneStyle}></Image>
                    </View>
                    <View style={styles.childContainer}>
                        <Image source={Images.OnboardingScreenTwoTwo} style={styles.OnboardingScreenImageOneStyle}></Image>
                        <View style={styles.BackGroundColorBoxStyleOne}></View>
                    </View>
                    <View style={styles.childContainer}>
                        <View style={styles.BackGroundColorBoxStyleTwo}></View>
                        <Image source={Images.OnboardingScreenTwoThrid} style={styles.OnboardingScreenImageOneStyle}></Image>
                    </View>
                </View>
                <Text style={styles.textContainer}>{OnboardingScreenTwoText.textOne}</Text>
                <Text style={styles.childTextContainer}>{OnboardingScreenTwoText.textTwo}</Text>
            </View>
            <View style={styles.progessBarStyle}> 
                <CircularProgress fill={66} rotation={0} navigationScreen={'OnboardingScreenThrid'}/>
            </View>
        </View>
    )
}

export default OnboardingScreenTwo