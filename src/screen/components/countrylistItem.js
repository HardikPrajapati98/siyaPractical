import React, {memo} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {countryList} from '../../styleSheet/countryList';
import { useNavigation } from '@react-navigation/native'

const CountryListItem = (props) => {
    const { item } = props
    const navigation = useNavigation()


    const navigate = () => {
        let obj = {
            capital: item.capital?.[0],
            timezones:item.timezones,
            languages:item.languages
        }
        navigation.navigate('countryInfo',{obj:obj})
    }

    return <TouchableOpacity
        onPress={navigate}
        style={countryList.itemView}>
        <View style={countryList.listView}>
            <Text style={countryList.title}>Name : <Text style={countryList.subTitle}>{item.name.common}</Text> </Text>
            <Text style={countryList.title}>Region : <Text style={countryList.subTitle}>{item.region}</Text> </Text>
        </View>
        <View style={countryList.flagView}>
            <Image
                source={{uri: item.flags.png}}
                style={{height: 50, width: '100%'}}
            />
        </View>

    </TouchableOpacity>

}

function stopReRender(prevProps, nextProps) {
    return prevProps === nextProps
}

export default memo(CountryListItem, stopReRender);
