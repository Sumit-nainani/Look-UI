import { View, Text, Animated, Dimensions, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { Images } from '../../constants/index';


const AppLanding = () => {

    const { width } = Dimensions.get('screen');

    const animationRef = useRef(new Animated.Value(0));
    const animationXLeftRef = useRef(new Animated.Value(0));
    const animationXRightRef = useRef(new Animated.Value(0));
    const animationImageRef = useRef(new Animated.Value(0));

    const [isTextAnimationFinish, setIsTextAnimationFinish] = useState<boolean>(false);

    useEffect(() => {
        Animated.timing(animationRef.current, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => {
            Animated.parallel([
                Animated.timing(animationXLeftRef.current, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(animationXRightRef.current, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                setIsTextAnimationFinish(true);
                Animated.timing(animationImageRef.current, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }).start()
            });
        });
    }, [animationRef,isTextAnimationFinish])

    const animatedStyle = {
        opacity: animationRef.current.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0.5, 1],
        }),

    }

    const animationImageStyle = {
        opacity: animationImageRef.current.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0.5, 1],
        }),
    }

    const leftTransformStyle = {
        transform: [
            {
                translateX: animationXLeftRef.current.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -width],
                }),
            },
        ]
    }

    const rightTransformStyle = {
        transform: [
            {
                translateX: animationXRightRef.current.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, width],
                }),
            },
        ]
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[animatedStyle, styles.animatedContainer]}>
                {
                    isTextAnimationFinish ? <Animated.View style={animationImageStyle}>
                        <Image style={styles.imageStyle} source={Images.scissorHeaderImage}></Image>
                    </Animated.View> :
                        <>
                            <Animated.Text style={[styles.animatedText, leftTransformStyle]}>
                                Lo
                            </Animated.Text>
                            <Animated.Text style={[styles.animatedText, rightTransformStyle]}>
                                ok
                            </Animated.Text>
                        </>
                }
            </Animated.View>
        </View>
    )
}

export default AppLanding