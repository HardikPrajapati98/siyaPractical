import {StyleSheet} from "react-native";
import{getFontSize} from "../utils/commonFunc"
export const countryList = StyleSheet.create({
    itemView: {
        height: 150,
        width: '100%',
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 10,
        paddingHorizontal: 20,
        paddingVertical:30,
        gap: 5,
        flexDirection: "row"
    },
    title: {
        fontWeight: "600",
        fontSize : getFontSize(17)
    },
    subTitle: {
        fontSize:getFontSize(13)
    },
    listView: {
        flex: 0.8,
        gap: 5
    },
    flagView: {
        flex: 0.2,
    }

})
