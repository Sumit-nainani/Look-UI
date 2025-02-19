import { View, Text, Image, TouchableOpacity, Animated, BackHandler } from 'react-native';
import React, {  useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../../constants';
import styles from './styles';
import { AUTH_SCREEN_NUMBER } from '../../../constants/common';


interface Props {
    headerText: string;
    authStackTab: number;
}

const AuthHeader = (props: Props) => {
    const navigation = useNavigation();
    const { headerText, authStackTab } = props;

    const animationRef = useRef(new Animated.Value(0));
    

    // useEffect(() => {
    //     Animated.loop(
    //         Animated.sequence([
    //             // Rotate along Y-axis
    //             Animated.timing(animationRef.current, {
    //                 toValue: 1,
    //                 duration: 1500,
    //                 useNativeDriver: true,
    //             }),
    //             // Rotate along X-axis
    //             Animated.timing(animationRef.current, {
    //                 toValue: 1,
    //                 duration: 1500,
    //                 useNativeDriver: true,
    //             }),
    //         ])
    //     ).start();
    // }, [animationRef]);

    const animationStyle = {
        transform: [
            {
                rotateY: animationRef.current.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                }),
            },
            {
                rotateX: animationRef.current.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                }),
            }
        ],
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.rowFlex}>
                    <TouchableOpacity onPress={() => authStackTab ? navigation.goBack() : BackHandler.exitApp()}>
                        <Image
                            source={Images.chevrinIcon}
                            style={styles.chevrinIcon}></Image>
                    </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.authHeaderTextStyle}>{headerText}</Text>
                </View>
            </View>
            <View style={styles.rowFlex1}>
                {AUTH_SCREEN_NUMBER.map((key, index) => (
                    <View
                        key={index}
                        style={[
                            styles.horizontalLine,
                            authStackTab > index ? styles.horizontalLine1 : null,
                            authStackTab === index ? styles.horizontalLine2 : null,
                        ]}></View>
                ))}
            </View>
            <View style={styles.imageContainer}>
                <Animated.View style={animationStyle}>
                    <Image
                        source={Images.scissorHeaderImage}
                        style={styles.scissorImageStyle}></Image>
                </Animated.View>
            </View>
        </View>
    );
};

export default AuthHeader;
