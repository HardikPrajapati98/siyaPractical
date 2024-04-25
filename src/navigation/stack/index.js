import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "@screen/login"
import CountryList from "@screen/countryList"
import CountryInfo from "@screen/countryInfo"

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName={'login'}>
            <Stack.Screen
                name="login"
                component={Login}
            />

            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen
                    name="countryList"
                    component={CountryList}
                />
                <Stack.Screen
                    name="countryInfo"
                    component={CountryInfo}
                />
            </Stack.Group>

        </Stack.Navigator>
    );
};

export default StackNavigator;
