import React, {useCallback, useMemo} from 'react';
import {FlatList, Text, View} from 'react-native';
import {countryInfoStyle} from '../styleSheet/infoStyle';
import {loginStyles} from '../styleSheet/login';
import {commonStyles} from "../styleSheet/commonStyle";


const CountryInfo = (props) => {
    const {obj} = props.route.params
    console.log("===",obj)
    const language = useMemo(() => {
        return Object.values(obj.languages || {})?.join(',')
    }, [])

    const renderItem = useCallback(({item}) => {
        return <View style={[countryInfoStyle.timeZones,commonStyles.center]}>
            <Text style={countryInfoStyle.title}>{item}</Text>
        </View>
    }, [])

    const keyExtractor = useCallback((item, index) => index.toString(), [])

    return (
        <View style={loginStyles.container}>

            <View style={countryInfoStyle.cardView}>
                <Text style={countryInfoStyle.title}>{language}</Text>
                <Text style={countryInfoStyle.title}>{obj.capital}</Text>
                <View>
                    <FlatList
                        horizontal
                        data={obj.timezones || []}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        contentContainerStyle={{gap: 15}}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>


            </View>

        </View>
    );
};

export default CountryInfo;
