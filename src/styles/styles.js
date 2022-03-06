import { StyleSheet } from "react-native";


export default function getStyles(){
    const styles = StyleSheet.create({
        loginPageBackground:{
            backgroundColor: "black",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        loginPageContainer:{
            color: "white",
            display: "flex",
            justifyContent: "center"
        },
        buttonsContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginVertical: 20
          },
        alignButtons: {
            flexDirection: "row",
            display: "flex", 
            alignItems: "flex-end",
            margin: 0,
            padding: 0
        }
    })
    
    return styles;
}

