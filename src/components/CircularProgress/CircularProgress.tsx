import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Images } from '../../constants/index';
import { COLORS } from '../../constants/theme';
import styles from '../CircularProgress/styles';

const CircularProgress: React.FC = (props: any) => {
  const { fill, rotation, navigationScreen } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(navigationScreen)}
    >
      <AnimatedCircularProgress
        size={90}
        width={2}
        fill={fill}
        rotation={rotation}
        tintColor={COLORS.colorWhite}
        backgroundColor={COLORS.colorNeutral}
        padding={10}
        duration={2000}
      >
        {(fill) => (
          <View style={styles.imageContainer}>
            <Image source={Images.RightAroww} style={styles.arrowIcon}></Image>
          </View>
        )}
      </AnimatedCircularProgress>
    </TouchableOpacity>
  );
};

export default CircularProgress;
