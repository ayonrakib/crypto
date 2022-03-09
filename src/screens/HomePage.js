import React from "react";
import { View, Text } from "react-native";
import getStyles from '../styles/styles' 

export default function HomePage(){
    return(
        <View style={getStyles().homePage}>
            <Text>
                Home page
            </Text>
        </View>
    )
}