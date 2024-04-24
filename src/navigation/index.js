import React from 'react';

import {Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./stack";

const NavigationContainers = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};

export default NavigationContainers;
