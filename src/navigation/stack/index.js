import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "@screen/login"
import CountryList from "@screen/countryList"
import CountryInfo from "@screen/countryInfo"

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    const options = {
        headerTitleAlign: "center",

    }
    return (
        <Stack.Navigator initialRouteName={'login'}>
            <Stack.Screen
                name="login"
                component={Login}
                options={{...options, title: "Welcome"}}
            />
            <Stack.Screen name="countryList"
                          component={CountryList}
                          options={{...options, title: "List"}}
            />
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen
                    name="countryInfo"
                    component={CountryInfo}
                    options={{...options, title: "Information"}}

                />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;
