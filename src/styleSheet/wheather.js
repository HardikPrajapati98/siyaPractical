import { StyleSheet } from "react-native"
import { getFontSize } from "../utils/commonFunc"

export const wheatherStyles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#b9e2f5',
        paddingTop: 20,
        gap:15
    
    },
    title: {
        fontSize: getFontSize(30),
        fontWeight: "700",
    },
    currentLoc: {
        height: 35,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
        
    },
    currentLocText: {
        fontWeight: 'bold',
        fontSize: getFontSize(17),
       color:'red'
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
           alignItems:"center"
       },
       
    mainTitle: {
         fontSize: getFontSize(30),
        fontWeight: "700",
        color:'#000'
    },
    box: {
        flex: 1,
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        alignItems: "center",
        justifyContent:'center'
    },
    cityBox: {
        height: 150,
        borderWidth: 1,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent:'center'
    }

})