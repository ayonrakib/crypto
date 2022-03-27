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
            marginBottom: 20,
            justifyContent:"space-evenly"
        },
        coinImage:{
            width: 10,
            height: 30,
            marginRight: 70,
            alignSelf:"center",
            flex: 1
        },
        coinName: {
            alignSelf: "center",
            textAlign: "left",
            marginRight: 50,
            color: "white",
            flex: 1
        },
        coinPrice:{
            marginLeft: 60,
            alignSelf: "center",
            marginRight: 60,
            color: "white",
            flex: 1
        },
        healthBar:{
            alignSelf: "center",
            width: 10,
            height: 30,
            flex: 1
        }
    })

    
    return styles;
}

