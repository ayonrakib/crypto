import React from "react";
import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import getStyles from "../styles/styles";

export default function GetInput(props){
    return(
        
            <Input
                placeholder={props.placeholder}
                leftIcon={props.leftIcon}
                style={props.style}
                autoCapitalize={props.autoCapitalize}
                secureTextEntry={props.secureTextEntry}
                leftIconContainerStyle={{width: 45, alignItems: "flex-start"}}
                inputContainerStyle={{display: "flex", justifyContent: "center"}}
            />
    )
}