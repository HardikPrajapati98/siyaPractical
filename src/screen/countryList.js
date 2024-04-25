import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {commonStyles} from '../styleSheet/commonStyle';
import CountryListItem from './components/countrylistItem';
import GetCityData from "./customHooks/getCityData";

const CountryList = () => {
    const countryData = GetCityData()
   const  ITEM_HEIGHT  = 150
    const renderItem = useCallback(({item, index}) => <CountryListItem item={item}/>, [])

    const keyExtractor = useCallback((item, index) => index.toString(), [])

    const getItemLayout = (data, index) => (
        {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
    );

    return (
        <View style={[commonStyles.paddingHorizontal20, commonStyles.paddingVertical30, {flex: 1,}]}>
            <FlatList
                data={countryData}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                contentContainerStyle={{gap: 15}}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={1}
                getItemLayout={getItemLayout}
            />

        </View>
    );
};

export default CountryList;
