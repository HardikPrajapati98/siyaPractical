import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {commonStyles} from '../styleSheet/commonStyle';
import CountryListItem from './components/countrylistItem';
import {storeCountry} from "@store/reducers/countryStore"
import {useDispatch, useSelector} from 'react-redux';
import {apiServices} from "@network/getServices"
import LodingIndicator from "./components/loding";

const CountryList = (props) => {
    const ITEM_HEIGHT = 150
    const [countryList, setCountryList] = useState([])
    const dispatch = useDispatch()
    const skipRef = useRef({value: 0})
    const limitRef = useRef({value: 10})
    const {country} = useSelector(state => state.countryStore)
    const endData = useRef({value: ''}).current
    const loadingRef = useRef(null)
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    disable={disable}
                    onPress={fetchData}>
                    <Text>Fetch Data</Text>
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    onPress={goBack}>
                    <Text>Back</Text>
                </TouchableOpacity>
            ),
        })
    }, []);

    const goBack = () => props.navigation.goBack()

    useEffect(() => {
        pagination()
    }, [country])

    const fetchData = async () => {
        if (countryList.length >= 1) return
        loadingRef.current.animate(true)
        setDisable(true)
        apiServices.getCountry()
            .then((countryResponse) => {
                dispatch(storeCountry(countryResponse))
                setDisable(false)
            })
            .catch((error) => {
                loadingRef.current.animate(false)
                setDisable(false)
            })
    }

    const pagination = () => {
        if (country.length === 0) return
        const sliceData = country.slice(skipRef.current.value, limitRef.current.value)
        if (sliceData.length === 10) {
            skipRef.current.value += 10
            limitRef.current.value += 10
        }
        if (sliceData.length < 10) endData.value = 'DataEnd'
        loadingRef.current.animate(false)
        setCountryList(prevState => {
            return [...prevState, ...sliceData]
        })
    }

    const renderItem = useCallback(({item, index}) => <CountryListItem item={item}/>, [])

    const keyExtractor = useCallback((item, index) => index.toString(), [])

    const getItemLayout = (data, index) => (
        {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
    );

    const onEndReached = () => {
        if (countryList.length >= 1 && endData.value === '') pagination()
    }

    return (
        <View style={[commonStyles.paddingHorizontal20, commonStyles.paddingVertical30, {
            flex: 1,
            backgroundColor: '#000',
            paddingBottom: 0
        }]}>
            <LodingIndicator ref={loadingRef}/>
            <FlatList
                data={countryList}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                contentContainerStyle={{gap: 15}}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={2}
                getItemLayout={getItemLayout}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.5}
            />

        </View>
    );
};

export default CountryList;
