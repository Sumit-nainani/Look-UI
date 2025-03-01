import { View, Text, Image, TouchableOpacity, Animated, BackHandler } from 'react-native';
import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../../constants';
import styles from './styles';
import { AUTH_SCREEN_NUMBER } from '../../../constants/common';


interface Props {
    headerText: string;
    authStackTab: number;
    showStrip: boolean;
}

const AuthHeader: React.FC<Props> = (props: Props) => {
    const navigation = useNavigation();
    const { headerText, authStackTab, showStrip } = props;

    const animationRef = useRef(new Animated.Value(0));

    // enimation code for sizzer
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
                <TouchableOpacity onPress={() => authStackTab === AUTH_SCREEN_NUMBER[0].Name || authStackTab === AUTH_SCREEN_NUMBER[4].Login ? BackHandler.exitApp() : navigation.goBack()}>
                    <Image
                        source={Images.chevrinIcon}
                        style={styles.chevrinIcon}></Image>
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.authHeaderTextStyle}>{headerText}</Text>
                </View>
            </View>
            <View style={showStrip ? styles.rowFlex1 : null}>
                {AUTH_SCREEN_NUMBER.map((key, index) => (
                    <View
                        key={index}
                        style={
                            showStrip
                                ? [
                                    styles.horizontalLine,
                                    authStackTab > index ? styles.horizontalLine1 : null,
                                    authStackTab === index ? styles.horizontalLine2 : null,
                                ] : null
                        }
                    ></View>
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
