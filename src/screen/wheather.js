import React, { useEffect, useState } from "react"
import { View,Text, ScrollView, Modal } from "react-native"
import { wheatherStyles } from "../styleSheet/wheather"
import LocationSearch from "./components/locationSearch"
import Geolocation from '@react-native-community/geolocation';
import {apiServices} from "@network/getServices"
import WheatherDetail from "./components/wheatherDetail";
import CityList from "./components/cityList";


const Wheather = () => {
    const [openMdal, setOpenModal] = useState(false)
    const [wheatherData,setWheatherData] = useState(null)
    

  
    

    const getWheatherDetail = (data) => {
        let payload = {
            lat: data.latitude,
            lon:data.longitude
        }
         apiServices.getWheatherForcast(payload)
             .then((countryResponse) => {
                 setWheatherData(countryResponse)
                setOpenModal(true)
            })
             .catch((error) => {

            })
    }
    

    return <View style={wheatherStyles.container}>
        <Text style={wheatherStyles.title}> Wheather</Text>
        <LocationSearch />
        <ScrollView
        contentContainerStyle={{gap:10}}
        > 
            <CityList getWheatherDetail={getWheatherDetail} />
            
        </ScrollView>
        <Modal
         animationType="slide"
        visible={openMdal}
        onRequestClose={() => {
          setOpenModal(!openMdal);
            }}>
                        <WheatherDetail   getWheatherDetail={getWheatherDetail}/>

            
        </Modal>

    
        
    </View>
}


export default Wheather