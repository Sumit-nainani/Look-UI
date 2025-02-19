import { StyleSheet } from "react-native"
import { COLORS } from "../../constants/theme"

const styles = StyleSheet.create({
    arrowIcon:{
        height:26,
        width:26
    },
    imageContainer:{
        backgroundColor:COLORS.colorWhite,
        padding:18,
        borderRadius:45,
    },
    container:{
        alignItems:'center'
    }
})

export default styles