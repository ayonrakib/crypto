import React from "react";
import { View, Text } from "react-native";
import { ThemeProvider, Button, Input } from "react-native-elements";
import { Icon } from "react-native-elements";
import getStyles from '../styles/styles'
import GetInput from "./GetInput";

export default function Login(props){

    function login(){
        console.log("login button pressed!")
    }

    // console.log(props)
    

    return(
        <View style = {getStyles().loginPageBackground}>
            {/* <Input
                placeholder='Email'
                leftIcon={{ type: 'font-awesome', name: 'at' }}
                style={{color: "white"}}
            />
            <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                style={{color: "white"}}
                secureTextEntry={true}
            /> */}
            <GetInput placeholder='Email' leftIcon={{ type: 'font-awesome', name: 'at' }} style={{color: "white"}} autoCapitalize="none" secureTextEntry={false}/>
            <GetInput placeholder='Password' leftIcon={{ type: 'font-awesome', name: 'key' }} style={{color: "white"}} autoCapitalize="none" secureTextEntry={true}/>
            <View style={getStyles().alignButtons}>
                <Button 
                    title={"Login"} 
                    onPress={login} 
                    buttonStyle={{borderRadius: 8}} 
                    containerStyle={{
                        width: 100,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}>
                </Button>
                <Button 
                    title={"Register"} 
                    onPress={() => props.navigation.navigate('Register')} 
                    buttonStyle={{borderRadius: 8}} 
                    containerStyle={{
                        width: 100,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}>
                </Button>
            </View>

        </View>
    )
} 