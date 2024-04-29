import React, {useRef} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {wheatherStyles} from "../../styleSheet/wheather";

const DayForeCast = (props) => {
    const {data} =props
    const flatRef = useRef(null)

    const renderItem = ({item, index}) => {
        return <View style={[wheatherStyles.center, wheatherStyles.pad]}>
            <Text style={wheatherStyles.commonText}>{date(item.time, index)}</Text>
            <Image
                style={{height: 40, width: 40}}
                source={{uri: `https:${item.condition.icon}`}}
            />
            <Text style={wheatherStyles.subCommonText}>{item.temp_c}°</Text>
        </View>
    }

    const date = (time, index) => {
        let dateTime = new Date(time).toLocaleDateString('en-us', {
            hour12: true,
            hour: 'numeric',
        }).split(',')?.[1]
        if (currentTime === dateTime) {
            scrollToIndex(index)
            return 'Now'
        } else return dateTime
    }

    const currentTime = new Date().toLocaleDateString('en-us', {
        hour12: true,
        hour: 'numeric',
    }).split(',')?.[1]

    const scrollToIndex = (index) => {
        setTimeout(() => {
            flatRef.current.scrollToIndex({
                index: index,
                animated: true
            })
        }, 500)
    }

    return (
        <FlatList
            ref={flatRef}
            horizontal
            data={data}
            renderItem={renderItem}
            contentContainerStyle={{gap: 15}}
            onScrollToIndexFailed={(info) => {
                const wait = new Promise((resolve) => setTimeout(resolve, 500));
                wait.then(() => {
                    flatRef.current.scrollToEnd({
                        animated: true,
                    });
                });
            }}
        />
    );
};

export default DayForeCast;
