import React from 'react';
import { Text, View } from 'react-native';
import { countryInfoStyle } from '../styleSheet/infoStyle';
import { loginStyles } from '../styleSheet/login';


const CountryInfo = () => {
    return (
        <View style={loginStyles.container}>

            <View style={countryInfoStyle.cardView}>

                <Text style={countryInfoStyle.title}>Langugage</Text>
                              <Text style={countryInfoStyle.title}>Langugage</Text>



            </View>
            
        </View>
    );
};

export default CountryInfo;
