import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";
import Register from './src/screens/Register'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Crypto",
    },
  }
);

export default createAppContainer(navigator);