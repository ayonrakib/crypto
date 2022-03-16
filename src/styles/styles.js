import { StyleSheet } from "react-native";


export default function getStyles(){
    const styles = StyleSheet.create({
        // loginPageBackground:{
        //     backgroundColor: "white",
        //     flex: 1,
        //     alignItems: "center",
        //     justifyContent: "center",
        //     color: "black"
        // },
        // loginPageContainer:{
        //     color: "black",
        //     display: "flex",
        //     justifyContent: "center"
        // },
        // buttonsContainer: {
        //     flexDirection: 'row',
        //     flexWrap: 'wrap',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     width: '100%',
        //     marginVertical: 20
        //   },
        // alignButtons: {
        //     flexDirection: "row",
        //     display: "flex", 
        //     alignItems: "flex-end",
        //     margin: 0,
        //     padding: 0
        // },
        // homePage:{
        //     backgroundColor: "black"
        // }
        container:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black"
        },
        coinLine:{
            flexDirection: "row",
            marginBottom: 20
        },
        coinImage:{
            width: 30,
            height: 30
        },
        coinName: {
            marginLeft: 40,
            alignSelf: "center",
            color: "white"
        },
        coinPrice:{
            marginLeft: 40,
            alignSelf: "center",
            color: "white"
        },
        healthBar:{
            marginLeft: 40,
            alignSelf: "center",
            width: 30,
            height: 30
        }
    })

    
    return styles;
}

