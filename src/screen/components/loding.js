import React, {forwardRef, useImperativeHandle, useState} from 'react';

import {ActivityIndicator, Text, View} from 'react-native';
import {commonStyles} from "../../styleSheet/commonStyle";

const LodingIndicator = forwardRef((props, ref) => {
    const [hide, setHide] = useState(false)

    useImperativeHandle(ref,() => (({
        animate: (value) => setHide(value)
    })))

    return hide && <View style={[commonStyles.absoluteView, commonStyles.center]}>
        <ActivityIndicator color={'#fff'}/>
    </View>
})

export default LodingIndicator;
