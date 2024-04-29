import React from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { wheatherStyles } from "../../styleSheet/wheather"
import { loginStyles } from "../../styleSheet/login"


const LocationSearch = (props) => {
  const {getWheatherDetail} = props


  const getCurretntLocation = () => {
      Geolocation.getCurrentPosition(info => {
            getWheatherDetail(info.coords)
      });
  }
  

    return <TouchableOpacity  onPress={getCurretntLocation} style={wheatherStyles.currentLoc}>        
         <Text style={wheatherStyles.currentLocText}>
          Use Current Location
           </Text>
                    
           </TouchableOpacity>
}


export default LocationSearch