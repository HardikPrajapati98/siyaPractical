import React from 'react';
import {Text, View} from 'react-native';
import CountryList from "@screen/countryList"

const Login = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <CountryList/>
        </View>
    );
};

export default Login;
