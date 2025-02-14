import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const styles = StyleSheet.create({
    OnboardingScreenImageOneStyle: {
        aspectRatio: 1,
        width: 160,
    },
    container: {
        flex: 1
    },
    ChildContainer: {
        flexDirection: 'row',
        justifyContent:'center'
    },
    BackGroundColorBoxStyle: {
        aspectRatio: 1,
        width: 160,
        backgroundColor: COLORS.colorBl,
        borderTopLeftRadius: 88
    }
})

export default styles