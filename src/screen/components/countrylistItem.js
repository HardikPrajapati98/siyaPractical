
import React from 'react';

import { Text, TouchableOpacity, View} from 'react-native';
import { countryList } from '../../styleSheet/countryList';
const CountryListItem = (props) => {
    const { item } = props
    
    return <TouchableOpacity style={countryList.itemView}>


        <View style={countryList.listView}>
            <Text style={countryList.title}>Name : <Text style={countryList.subTitle}>{ item.name.common}</Text> </Text>
           <Text  style={countryList.title}>Region :<Text style={countryList.subTitle}>{item.region}</Text>  </Text>
        </View>
        <View>

        </View>
                <View style={countryList.flagView}>

            </View>


    </TouchableOpacity>
    
}


export default CountryListItem
