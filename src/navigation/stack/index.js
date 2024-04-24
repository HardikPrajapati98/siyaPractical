import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName={'SplashScreen'}>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={option}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
