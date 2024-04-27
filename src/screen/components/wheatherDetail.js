import React, { useEffect } from "react"
import { View,Text } from "react-native"
import { wheatherStyles } from "../../styleSheet/wheather";

const WheatherDetail = () => {
    return <View style={wheatherStyles.container}>
        <View style={wheatherStyles.alignCenter}> 
            <Text style={wheatherStyles.mainTitle}>Ahmedabad</Text>
            <Text style={wheatherStyles.mainTitle}>38</Text>

        </View>
        <View style={[wheatherStyles.alignCenter,{flexDirection:'row',gap:10}]}> 
            <View style={wheatherStyles.box}>
                <Text>
                    overcast clouds

                </Text>
            </View>
            <View style={wheatherStyles.box}>
                <Text>
                    Wind

                </Text>
                 <Text>
                   3.09s/hour

                </Text>
            </View>
            
        </View>
         
     </View>
    
}




export default WheatherDetail;