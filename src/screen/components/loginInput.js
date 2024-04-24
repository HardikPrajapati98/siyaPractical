import React, { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { Text, TextInput ,View} from 'react-native'
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
            <TextInput
                placeholder="Enter Password"
                ref={passowrdRef}
                style={loginStyles.inputView}
                value={loginProp?.password || ''}
                onChange={(e) => updateState(e, 'password')}
                secureTextEntry={true}
                placeholderTextColor={"#fff"}
            />
        </View>

    
             
    </View>

})

export default LoginInputBox;