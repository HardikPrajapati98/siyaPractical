import React, { useRef } from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import { loginStyles } from '../styleSheet/login';
import LoginInputBox from './components/loginInput';
import { commonStyles } from '../styleSheet/commonStyle';
import { useNavigation } from '@react-navigation/native'

const Login = () => {
     const navigation = useNavigation()
     const inputRef = useRef()

    const submitData = () => {
        const getData = inputRef.current.getProps()
        if (getData?.email || getData.password) {
            navigation.push('countryList')
        }
        else Alert.alert("", "All fields are required.", [

            {text: "OK", onPress: () => {}},
        ]);
    }

    return (
        <View style={loginStyles.container}>
            <LoginInputBox ref={inputRef}/>

            <TouchableOpacity
                onPress={submitData}
                style={[loginStyles.submitBtn, commonStyles.center]} >
                    <Text style={loginStyles.submitText}>
                        Login
                    </Text>
                </TouchableOpacity>

        </View>
    );
};

export default Login;
