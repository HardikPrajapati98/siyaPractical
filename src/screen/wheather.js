import React, {useEffect, useState} from "react"
import {View, Text, ScrollView, StyleSheet, Modal, ActivityIndicator, Alert} from "react-native"
import {wheatherStyles} from "../styleSheet/wheather"
import LocationSearch from "./components/locationSearch"
import {apiServices} from "@network/getServices"
import WheatherDetail from "./components/wheatherDetail";
import CityList from "./components/cityList";

const Wheather = () => {
    const [openModal, setOpenModal] = useState(false)
    const [weather, setWeatherData] = useState(null)
    const [loader, setLoader] = useState(false)

    const showAlert = (text) => {
        Alert.alert("", text, [
            {
                text: "OK", onPress: () => {
                }
            },
        ]);
    }
    const getWeatherDetail = (data) => {
        setLoader(true)
        apiServices.getWheatherForcast(`${data.latitude},${data.longitude}`)
            .then((countryResponse) => {
                setWeatherData(countryResponse)
                setOpenModal(true)
                setLoader(false)
            })
            .catch((error) => {
                setLoader(false)
                showAlert("Something went wrong")
            })
    }
    const close = () => setOpenModal(prevState => !prevState)


    return <View style={wheatherStyles.container}>
        <Text style={wheatherStyles.title}> Weather</Text>
        <LocationSearch loader={loader} getWeatherDetail={getWeatherDetail}/>
        <ScrollView contentContainerStyle={{gap: 10}}>
            <CityList  loader={loader} getWeatherDetail={getWeatherDetail}/>
        </ScrollView>
        <Modal
            animationType="slide"
            visible={openModal}
            onRequestClose={close}
        >
            <WheatherDetail
                close={close}
                weather={weather}
                getWeatherDetail={getWeatherDetail}
                          />
        </Modal>
        {loader && <View
            style={[wheatherStyles.center, {...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(58,58,58,0.8)'}]}>
            <ActivityIndicator color={'#b9e2f5'} size={"small"}/>
        </View>}

    </View>
}


export default Wheather
