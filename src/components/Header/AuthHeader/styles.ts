import { StyleSheet } from "react-native"
import { COLORS } from "../../../constants/theme";

const styles = StyleSheet.create(
    {
        scissorImageStyle:{
            aspectRatio:1,
            height:36,
        },
        authHeaderTextStyle:{
            fontSize:20,
            lineHeight:24,
            color:COLORS.colorBl,
            fontWeight:'500',
        },
        headerContainer:{
            marginHorizontal:10
        },
        chevrinIcon:{
            width:14,
            height:26
        },
        rowFlex:{
            flexDirection:'row',
            marginBottom:30,
            marginTop:10
        },
        imageContainer:{
            alignItems:'center',
            marginBottom:30
        },
        textContainer:{
            alignItems:'center',
            flex:1,
        },
        horizontalLine:{
            width:'25%',
            height:8,
            backgroundColor:COLORS.colorGrey,
            marginHorizontal:2
        },
        rowFlex1:{
            flexDirection:'row',
            marginBottom:26
        },
        horizontalLine1:{
           backgroundColor: COLORS.colorBlue
        },
        horizontalLine2:{
           backgroundColor: COLORS.colorBlueFaded
        }
    }
)

export default styles;