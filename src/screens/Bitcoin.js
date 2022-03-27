import React from "react";
import { View, Text, Image } from "react-native";
import {Button} from 'react-native-paper';
import getStyles from "../styles/styles";

export default function Bitcoin(){
    return(
        <View style={getStyles().container}>
            <View style={getStyles().coinLine}>
                <Image source={require('../static/images/bitcoin.png')} style={getStyles().coinImage}></Image>
                <Text style={getStyles().coinName}>
                    Bitcoin
                </Text>
                <Text style={getStyles().coinPrice}>
                    51000$
                </Text>
                <Image source={require('../static/images/health-bar.jpg')} style={getStyles().healthBar}></Image>
            </View>
            <View style={getStyles().coinLine}>
                <Image source={require('../static/images/dogecoin.png')} style={getStyles().coinImage}></Image>
                <Text style={getStyles().coinName}>
                    Doge coin
                </Text>
                <Text style={getStyles().coinPrice}>
                    51000$
                </Text>
                <Image source={require('../static/images/health-bar.jpg')} style={getStyles().healthBar}></Image>
            </View>

            {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button> */}

        </View>

    )
}