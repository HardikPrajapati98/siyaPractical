import React, { useCallback, useEffect, useState } from 'react';

import {FlatList, Text, View} from 'react-native';
import { commonStyles } from '../styleSheet/commonStyle';
import CountryListItem from './components/countrylistItem';

const CountryList = () => {
    const [countryData, setCountryData] = useState([])
    

    const countryApi = async() => {
      const response = await fetch("https://restcountries.com/v3.1/all");
        const movies = await response.json();
        setCountryData(movies)
  

    }
    
    useEffect(() => {
        countryApi()
    },[])

    const renderItem = useCallback(({ item, index }) => <CountryListItem item={item} />, [])

       const keyExtractor = useCallback((item) => item.toString(),[])

    return (
        <View style={[commonStyles.paddingHorizontal20,commonStyles.paddingVertical30,{ flex: 1, }]}>
            <FlatList
                data={countryData}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                contentContainerStyle={{ gap: 15 }}
                initialNumToRender={4}
                maxToRenderPerBatch={10}
            />
            
        </View>
    );
};

export default CountryList;
