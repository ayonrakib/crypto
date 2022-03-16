import React from "react";
import { View, Text, Image } from "react-native";
import getStyles from '../styles/styles' 

export default function HomePage(){
    return(
        <View style={getStyles().homePage}>
            <Image source={require('../static/images/bitcoin.png')}></Image>
        </View>
    )
}