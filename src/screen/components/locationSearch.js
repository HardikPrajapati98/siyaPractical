import React from "react"
import {Linking, Platform, Text, TextInput, TouchableOpacity, View} from "react-native"
import {wheatherStyles} from "../../styleSheet/wheather"
import Geolocation from "@react-native-community/geolocation";

const LocationSearch = (props) => {
    const {getWeatherDetail, loader} = props

    const getCurretntLocation = () => {
        Geolocation.getCurrentPosition(info => {
            getWeatherDetail(info.coords)
        }, () => {
            if (Platform.OS === 'ios') {
                Linking.openURL('app-settings:');
            } else {
                Linking.openSettings();
            }
        })
    }

    return <TouchableOpacity disabled={loader} onPress={getCurretntLocation} style={wheatherStyles.currentLoc}>
        <Text style={wheatherStyles.currentLocText}>
            Current Location
        </Text>
        <Text>
            Using GPS
        </Text>

    </TouchableOpacity>
}


export default LocationSearch
