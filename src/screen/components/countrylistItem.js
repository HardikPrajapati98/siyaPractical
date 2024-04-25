import React, {memo} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {countryList} from '../../styleSheet/countryList';

const CountryListItem = (props) => {
    const {item} = props
    return <TouchableOpacity style={countryList.itemView}>
        <View style={countryList.listView}>
            <Text style={countryList.title}>Name : <Text style={countryList.subTitle}>{item.name.common}</Text> </Text>
            <Text style={countryList.title}>Region :<Text style={countryList.subTitle}>{item.region}</Text> </Text>
        </View>
        <View>

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
