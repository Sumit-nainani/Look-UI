import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/theme';

const styles = StyleSheet.create({
     imageBackgrondStyle:{
        flex:1,
        justifyContent: 'flex-end',
        // paddingHorizontal:10,
        height:'70%'
     },
     container:{
        flex:1,
     },
     gradient: {
       flex:1,
      },
     gradientContainer: {
        flex:0.4,
     },
     authButton:{
        borderRadius:10,
        backgroundColor:COLORS.colorWhite,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:14,
        marginVertical:8
     },
     logoStyle:{
        aspectRatio:1,
        width:22
     },
     authOptionText:{
        fontSize:16,
        fontWeight:'500',
        color:COLORS.colorBl,
        paddingHorizontal:6,
     },
     createAccountButton:{
        backgroundColor:COLORS.colorBlue,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:14,
        marginVertical:8
     },
     createAccountText:{
        fontSize:16,
        fontWeight:'500',
        color:COLORS.colorWhite,
        paddingHorizontal:6,
     },
     childContainer:{
        flex:1,
        paddingHorizontal:16,
        justifyContent:'flex-end',
    },
    bookingTextStyle:{
        color:COLORS.colorWhite,
        fontSize:32,
        fontWeight:'700',
        lineHeight:42,
        letterSpacing:0.118
    },
    alreadyAccountTextStyle:{
        color:COLORS.colorWhite,
        fontSize:16,
        fontWeight:'500',
        textAlign:'center'
    },
    loginButton:{
        borderRadius:10,
        borderColor:COLORS.colorWhite,
        borderWidth:1,
        paddingVertical:14
    },
    termAndServiceTextStyle:{
        color:COLORS.colorNeutral,
        fontSize:13,
        fontWeight:'400',
        textAlign:'center',
        marginHorizontal:10,
        marginTop:24
    },
    contentStyle:{
        flex:0.65,
        justifyContent:'space-between',
        paddingBottom:50,
    },
    marginBottom:{
        marginBottom:10
    }

})

export default styles