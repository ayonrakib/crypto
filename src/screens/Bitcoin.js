import React from "react";
import { View, Text, Image } from "react-native";
import {Button} from 'react-native-paper';
import getStyles from "../styles/styles";

export default function Bitcoin(){
    return(
        <View style={getStyles().container}>
            <View style={getStyles().coinLine}>
                <View style={getStyles().coinImage}>
                    <Image source={require('../static/images/bitcoin.png')} style={getStyles().coinImageDimension}></Image>
                </View>
                
                <View style={getStyles().coinName}>
                    <Text>
                        Bitcoin
                    </Text>
                </View>
                <View style={getStyles().coinPrice}>
                    <Text>
                        51000$
                    </Text>
                </View>
                <Image source={require('../static/images/health-bar.jpg')} style={getStyles().healthBar}></Image>
            </View>
            <View style={getStyles().coinLine}>
                <View style={getStyles().coinImage}>
                    <Image source={require('../static/images/dogecoin.png')} style={getStyles().coinImageDimension}></Image>
                </View>
                
                <View style={getStyles().coinName}>
                    <Text>
                        Doge coin
                    </Text> 
                </View>
                <View style={getStyles().coinPrice}>
                    <Text>
                        51000$
                    </Text>
                </View>
                <Image source={require('../static/images/health-bar.jpg')} style={getStyles().healthBar}></Image>
            </View>

            {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button> */}

        </View>

    )
}