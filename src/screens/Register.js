import React from "react";
import { View, Text } from "react-native";
import { ThemeProvider, Button, Input } from "react-native-elements";
import { Icon } from "react-native-elements";
import getStyles from '../styles/styles'
import GetInput from './GetInput'

export default function Register(props){

    function register(){
        console.log("register button pressed!")
    }

    return(
        <View style = {getStyles().loginPageBackground}>
            {/* <Input
                placeholder='First Name'
                leftIcon={{ type: 'font-awesome', name: 'address-card' }}
                style={{color: "black"}}
                autoCapitalize="none"
            /> */}
            <GetInput placeholder='First Name' leftIcon={{ type: 'font-awesome', name: 'address-card' }} style={{color: "black"}} autoCapitalize="none" secureTextEntry={false}/>
            {/* <Input
                placeholder='Last Name'
                leftIcon={{ type: 'font-awesome', name: 'address-card' }}
                style={{color: "black"}}
                autoCapitalize="none"
            /> */}
            <GetInput placeholder='Last Name' leftIcon={{ type: 'font-awesome', name: 'address-card' }} style={{color: "black"}} autoCapitalize="none" secureTextEntry={false}/>
            {/* <Input
                placeholder='Email'
                leftIcon={{ type: 'font-awesome', name: 'at' }}
                style={{color: "black"}}
                autoCapitalize="none"
            /> */}
            <GetInput placeholder='Email' leftIcon={{ type: 'font-awesome', name: 'at' }} style={{color: "black"}} autoCapitalize="none" secureTextEntry={false}/>
            {/* <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                style={{color: "black"}}
                secureTextEntry={true}
                autoCapitalize={false}
            /> */}
            <GetInput placeholder='Password' leftIcon={{ type: 'font-awesome', name: 'key' }} style={{color: "black"}} autoCapitalize="none" secureTextEntry={true}/>
            <View style={getStyles().alignButtons}>
                <Button 
                    title={"Submit"} 
                    onPress={register} 
                    buttonStyle={{borderRadius: 8}} 
                    containerStyle={{
                        width: 100,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}>
                </Button>
                <Button 
                    title={"Go Back"} 
                    onPress={() => props.navigation.navigate('Login')} 
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