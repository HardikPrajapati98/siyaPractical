import React from 'react';
import {Text, View} from 'react-native';
import Navigation from "@navigation"

const HomeScreen = () => {
    return (
       <View style={{flex:1,backgroundColor:'#000'}}>
             <Navigation/>
            {/*<CountryList/>*/}
       </View>
    );
};

export default HomeScreen;
