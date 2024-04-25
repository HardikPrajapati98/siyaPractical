import React, { useRef } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { loginStyles } from '../styleSheet/login';
import LoginInputBox from './components/loginInput';
import { commonStyles } from '../styleSheet/commonStyle';
import {useNavigation} from '@react-navigation/native'
const Login = () => {
     const navigation = useNavigation()
    const inputRef = useRef()

    const submitData = () => {
        const getData = inputRef.current.getProps()
        if (getData?.email || getData.password) {
            navigation.navigate('countryList')
        }
        else alert("all feild required")

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
