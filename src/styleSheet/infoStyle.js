import {StyleSheet} from "react-native";
import{getFontSize} from "../utils/commonFunc"

export const countryInfoStyle = StyleSheet.create({

    cardView: {
        height: 150,
        width: "100%",
        borderRadius: 15,
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal:20
    },
    title: {
        fontSize:getFontSize(15)
    }


})    