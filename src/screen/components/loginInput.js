import React, { forwardRef, useImperativeHandle, useRef, useState } from "react"
import {Image, StyleSheet,Text, TextInput, View} from 'react-native'
import { loginStyles } from "../../styleSheet/login";

const LoginInputBox = forwardRef((props, ref) => {
    const [loginProp,setLoginProp] = useState({})
    const passowrdRef = useRef(null)

    useImperativeHandle(ref, () => (({
        getProps:() =>loginProp

    })))


    const updateState = (e, type) => {
        setLoginProp(preState => {
            return {...preState,[type]:e}
        })

    }

    const updateSecureEntery = () => {
        passowrdRef.current.setNativeProps({
            secureTextEntry:true
        })
    }


    return <View style={loginStyles.inputBox}>

        <Text style={loginStyles.headerText}>
            Log in To Scale
        </Text>

        <View style={loginStyles.commonGap}>
            <Text style={loginStyles.inputText}> Email</Text>
            <TextInput
                placeholder="Enter Email"
                style={loginStyles.inputView}
                value={loginProp?.email || ''}
                onChange={(e) => updateState(e, 'email')}
                 placeholderTextColor={"#fff"}

            />
            <Text style={loginStyles.inputText}> Password</Text>
            <View style={{flexDirection:'row'}}>
                    <TextInput
                        placeholder="Enter Password"
                        ref={passowrdRef}
                        style={loginStyles.inputView}
                        value={loginProp?.password || ''}
                        onChange={(e) => updateState(e, 'password')}
                        secureTextEntry={true}
                        placeholderTextColor={"#fff"}
                    />
                    <View style={{...StyleSheet.absoluteFillObject,right:0,height: 50, width: 25,backgroundColor:'red'}}>
                        <Image
                            source={{uri: 'https://cdn.iconscout.com/icon/free/png-256/free-eye-504-450305.png'}}
                            style={{height: 25, width: 25}}
                        />
                    </View>


            </View>

        </View>



    </View>

})

export default LoginInputBox;
