import {StyleSheet} from "react-native"
import {getFontSize} from "../utils/commonFunc"

export const wheatherStyles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#b9e2f5',
        paddingTop: 50,
        paddingBottom:20,
        gap: 15
    },
    title: {
        fontSize: getFontSize(30),
        fontWeight: "700",
    },
    currentLoc: {
        maxHeight: 50,
        paddingVertical: 10,
        gap:5,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    currentLocText: {
        fontWeight: 'bold',
        fontSize: getFontSize(17),
        color: '#EF455E'
    },
    inputBox: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        color: "#fff",
        paddingHorizontal: 15,
        fontSize: getFontSize(13)


    },
    alignCenter: {
        alignItems: "center",
        gap: 10,

    },
    pad: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    mainTitle: {
        fontSize: getFontSize(30),
        fontWeight: "700",
        color: '#000'
    },
    subTitle: {
        fontSize: getFontSize(20),
        fontWeight: "500",
        color: '#000'
    },
    commonText: {
        fontSize: getFontSize(16),
        fontWeight: "500",
        color: '#000'
    },
    subCommonText: {
        fontSize: getFontSize(15),
    },

    row: {flexDirection: 'row', gap: 10},
    box: {
        height: 100,
        borderRadius: 10,
        width: '100%',
        backgroundColor: 'white',
    },
    dayWiseBox: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        borderColor: "#b9e2f5"
    },
    cityBox: {
        height: 150,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: '#b9e2f5',
        borderWidth: 1
    },
    temp: {
        // height: 50,
        width: '100%',
        flex: 1,
        maxHeight: 100,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        borderRadius: 10,
        borderColor: "#b9e2f5",
        borderWidth: 1,
        padding: 10
    }


})
