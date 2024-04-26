import {StyleSheet} from "react-native";

export const commonStyles = StyleSheet.create({
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    paddingHorizontal20: {
        paddingHorizontal: 20
    },
    paddingVertical30: {
        paddingVertical: 30,

    },
    absoluteView:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'black'
    },

})
