import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.colorBl
    },
    animatedText:{
        color: COLORS.colorWhite,
        fontSize: 48,
        fontWeight: '500',
        lineHeight: 40,
    },
    imageStyle:{
        height: 100,
        width: 100,
    },
    animatedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
