import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";
import Register from './src/screens/Register'
import HomePage from "./src/screens/HomePage";
import Bitcoin from "./src/screens/Bitcoin";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login,
    Register: Register,
    Bitcoin: Bitcoin
  },
  
  {
    headerMode: "none",
    initialRouteName: "Bitcoin",
    defaultNavigationOptions: {
     
    },
  }
);

export default createAppContainer(navigator);