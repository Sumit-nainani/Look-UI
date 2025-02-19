import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const styles = StyleSheet.create({
    OnboardingScreenImageOneStyle: {
        aspectRatio: 1,
        width: 160,
    },
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.colorBlue
    },
    container: {
        flex:0.78,
        justifyContent:'space-between',
        paddingTop:24,
    },
    childContainer: {
        flexDirection: 'row',
        justifyContent:'center'
    },
    BackGroundColorBoxStyle: {
        aspectRatio: 1,
        width: 160,
        backgroundColor: COLORS.colorBl,
        borderTopLeftRadius: 88
    },
    BackGroundColorBoxStyleTwo:{
        aspectRatio: 1,
        width: 160,
        backgroundColor: COLORS.colorBl,
        borderTopRightRadius:80,
        borderTopLeftRadius:80
    },
    BackGroundColorBoxStyleOne:{
        aspectRatio: 1,
        width: 160,
        backgroundColor: COLORS.colorWhite,
        borderBottomRightRadius:80,
    },
    textContainer:{
        fontSize:34,
        lineHeight:40,
        fontWeight:'700',
        textAlign:'center',
        color:COLORS.colorWhite
    },
    childTextContainer:{
        fontSize:17,
        lineHeight:22,
        fontWeight:'500',
        color:COLORS.colorWhite,
        textAlign:'center',
    },
    progessBarStyle:{
        flex:0.2,
        justifyContent:'flex-end',
    }
})

export default styles