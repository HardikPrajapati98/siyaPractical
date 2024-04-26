import React, {useRef} from 'react';
import {Alert, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {loginStyles} from '../styleSheet/login';
import LoginInputBox from './components/loginInput';
import {commonStyles} from '../styleSheet/commonStyle';
import {useNavigation} from '@react-navigation/native'
import {regex} from "@utils/commonFunc"

const Login = () => {
    const navigation = useNavigation()
    const inputRef = useRef()

    const submitData = async () => {
        const getData = await inputRef.current.getProps()
        console.log("        const \n",getData)
        if (getData?.email && getData.password) {
            console.log("getData?.email",getData?.email)
            if (!regex.validateEmail(getData?.email)) {
                return Alert.alert("", "Please check email is not valid.", [
                    {
                        text: "OK", onPress: () => {
                        }
                    },
                ]);
            }
            navigation.push('countryList')
        } else Alert.alert("", "All fields are required.", [
            {
                text: "OK", onPress: () => {
                }
            },
        ]);
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} accessible={false}>
        <View style={loginStyles.container}>
            <LoginInputBox ref={inputRef}/>
            <TouchableOpacity
                onPress={submitData}
                style={[loginStyles.submitBtn, commonStyles.center]}>
                <Text style={loginStyles.submitText}>
                    Login
                </Text>
            </TouchableOpacity>

        </View>
        </TouchableWithoutFeedback>
    );
};

export default Login;
