import { StyleSheet } from "react-native";
import {getFontSize,responsiveWidth,responsiveHeight} from '../utils/commonFunc'

export const loginStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 30,
        gap:30
    },
    inputBox: {
        // flex: 1,
        gap:20
    },
    headerText: {
        color:"#fff",
        fontSize: getFontSize(25)
    },
    commonGap: {
        gap:10
    },
    inputText: {
         color:"#fff",
        fontSize: getFontSize(15)
    },

    inputView: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        color: "#fff",
        paddingHorizontal: 15,


    },
    submitBtn: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        backgroundColor:'white'
    },
    submitText: {
        color: '#000',
        // fontSize: 17,
        fontSize: getFontSize(20),
        fontWeight:"600"
    }

})
