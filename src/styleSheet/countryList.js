import { StyleSheet } from "react-native";


export const countryList = StyleSheet.create({
      
    itemView: {
        height: 150,
        width: '100%',
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 10,
        paddingHorizontal: 20,
        gap: 5,
        flexDirection:"row"
    },
    title: {
        fontWeight: "600",
        fontSize:16
    },
    subTitle: {
        fontSize:13
    },
    listView: {
        flex:0.8
    },
    flagView: {
        flex: 0.2,
        backgroundColor:'pink'
    }

})