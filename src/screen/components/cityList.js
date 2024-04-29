
import React, { useState } from "react"
import {View,Text, TouchableOpacity} from 'react-native'
import { wheatherStyles } from "../../styleSheet/wheather"

const CityList = (props) => {
    const {getWheatherDetail} = props
    const [city,setCity] = useState(    [
      {
        "name": "Ahmedabad",
        "latitude": 23.0225,
        "longitude": 72.5714
      },
      {
        "name": "Surat",
        "latitude": 21.1702,
        "longitude": 72.8311
      },
      {
        "name": "Vadodara",
        "latitude": 22.3072,
        "longitude": 73.1812
      },
      {
        "name": "Rajkot",
        "latitude": 22.3039,
        "longitude": 70.8022
      },
      {
        "name": "Bhavnagar",
        "latitude": 21.7645,
        "longitude": 72.1519
      }
    ]

    )
   


    return city.map((item) => {
        return  <TouchableOpacity onPress={()=>getWheatherDetail(item)} style={wheatherStyles.cityBox}>
            <Text style={wheatherStyles.mainTitle}>
                {item.name}
            </Text>
    </TouchableOpacity>
    })

}

export default CityList