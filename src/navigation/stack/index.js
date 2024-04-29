import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wheather from "@screen/wheather"

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    const options = {
        headerTitleAlign: "center",

    }
    return (
        <Stack.Navigator initialRouteName={'wheather'}>
             <Stack.Screen
                name="wheather"
                component={Wheather}
                options={{...options, title: "Welcome"}}
            />

        </Stack.Navigator>
    );
};

export default StackNavigator;
