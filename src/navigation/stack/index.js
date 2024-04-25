import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "@screen/login"
import CountryList from "@screen/login"
import CountryInfo from "@screen/login"

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName={'login'}>
            <Stack.Screen
                name="login"
                component={Login}
            />
            <Stack.Screen
                name="countryList"
                component={CountryList}
            />
            <Stack.Screen
                name="countryInfo"
                component={CountryInfo}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
