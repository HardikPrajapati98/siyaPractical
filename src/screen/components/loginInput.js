import React, {forwardRef, useImperativeHandle, useRef, useState} from "react"
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {loginStyles} from "../../styleSheet/login";
import {commonStyles} from "../../styleSheet/commonStyle";

const LoginInputBox = forwardRef((props, ref) => {
    const [loginProp, setLoginProp] = useState({})
    const passwordRef = useRef(null)
    const hidePassword = useRef({value: true}).current

    useImperativeHandle(ref, () => (({
        getProps: propsSend
    })))

    const propsSend = () => {
        return loginProp
    }


    const updateState = (e, type) => {
        setLoginProp(preState => {
            return {...preState, [type]: e}
        })
    }

    const updateSecureTextEntries = () => {
        passwordRef.current.setNativeProps({
            secureTextEntry: !hidePassword.value
        })
        hidePassword.value = !hidePassword.value
    }

    return <View style={loginStyles.inputBox}>
        <Text style={loginStyles.headerText}>
            Log in To App
        </Text>
        <View style={loginStyles.commonGap}>
            <Text style={loginStyles.inputText}> Email</Text>
            <TextInput
                placeholder="Enter Email"
                style={loginStyles.inputView}
                value={loginProp?.email || ''}
                onChangeText={(e) => updateState(e, 'email')}
                placeholderTextColor={"#fff"}
                keyboardType={"email-address"}
            />
            <Text style={loginStyles.inputText}> Password</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    placeholder="Enter Password"
                    ref={passwordRef}
                    style={loginStyles.inputView}
                    value={loginProp?.password || ''}
                    onChangeText={(e) => updateState(e, 'password')}
                    secureTextEntry={true}
                    placeholderTextColor={"#fff"}
                />
                <TouchableOpacity onPress={updateSecureTextEntries} style={loginStyles.eyeIcon}>
                    <Image
                        source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/free-eye-504-450305.png'}}
                        style={{height: 25, width: 25}}
                    />
                </TouchableOpacity>


            </View>

        </View>


    </View>

})

export default LoginInputBox;
