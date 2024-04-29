import React, {useEffect, useRef, useState} from "react"
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity} from "react-native"
import {wheatherStyles} from "../../styleSheet/wheather";
import DayForeCast from "./dayForecast";

const WheatherDetail = (props) => {
    const {close, weather} = props
    const [data, setData] = useState(weather)




    return <ScrollView style={{backgroundColor: '#b9e2f5'}}>
        <View style={wheatherStyles.container}>
            <TouchableOpacity onPress={close}>
                <Text>Close</Text>
            </TouchableOpacity>
            <View style={wheatherStyles.alignCenter}>
                <Text style={wheatherStyles.mainTitle}>{data.location.name}</Text>
                <Text style={wheatherStyles.subTitle}>{data.current?.temp_c}°C</Text>
                <Text style={wheatherStyles.subTitle}>{data.current?.temp_f} °F</Text>
            </View>
            <View style={[wheatherStyles.alignCenter, {flexDirection: 'row', gap: 10}]}>
                <View style={[wheatherStyles.box, wheatherStyles.center, {flex: 1}]}>
                    <Text style={wheatherStyles.subCommonText}>
                        {data.current.condition.text}
                    </Text>
                    <Image
                        style={{height: 40, width: 40}}
                        source={{uri: `https:${data.current.condition.icon}`}}
                    />
                </View>
            </View>
            <View style={[wheatherStyles.box, {padding: 10, gap: 20, maxHeight: 150, paddingVertical: 5}]}>
                <View style={[wheatherStyles.center, {flexDirection: 'row',}]}>
                    <Image
                        style={{height: 15, width: 15}}
                        source={{uri: 'https://uxwing.com/wp-content/themes/uxwing/download/weather/wind-icon.png'}}
                    />
                    <Text style={wheatherStyles.commonText}>
                        WIND
                    </Text>
                </View>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <View style={wheatherStyles.temp}>
                        <Text style={wheatherStyles.subCommonText}> {data.current.wind_kph}/kph</Text>
                    </View>
                    <View style={wheatherStyles.temp}>
                        <Text style={wheatherStyles.subCommonText}> {data.current.wind_mph}/mph</Text>
                    </View>
                </View>
            </View>
            {
                data.forecast?.forecastday.map((item) => {
                    const flatRef = useRef(null)

                    return <View style={[wheatherStyles.dayWiseBox, {gap: 10, borderColor: 'white'}]}>
                        <Text style={wheatherStyles.commonText}> Date: {item.date}</Text>
                        <View style={wheatherStyles.dayWiseBox}>
                            <DayForeCast data={item.hour}/>

                        </View>
                        <View style={{flexDirection: 'row', gap: 10}}>
                            <View style={wheatherStyles.temp}>
                                <Text style={wheatherStyles.commonText}> H</Text>
                                <Text style={wheatherStyles.subCommonText}>{item.day.maxtemp_c}°</Text>
                            </View>
                            <View style={wheatherStyles.temp}>
                                <Text style={wheatherStyles.commonText}> L</Text>
                                <Text style={wheatherStyles.subCommonText}>{item.day.mintemp_c}°</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', gap: 10}}>
                            <View style={wheatherStyles.temp}>
                                <Text style={wheatherStyles.commonText}> SunRise</Text>
                                <Text style={wheatherStyles.subCommonText}>{item.astro.sunrise}</Text>
                            </View>
                            <View style={wheatherStyles.temp}>
                                <Text style={wheatherStyles.commonText}> SunSet</Text>
                                <Text style={wheatherStyles.subCommonText}>{item.astro.sunset}</Text>
                            </View>
                        </View>
                    </View>

                })
            }
        </View>
    </ScrollView>

}


export default WheatherDetail;
