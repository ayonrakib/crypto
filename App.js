import { createAppContainer } from "react-navigation";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";
import Register from './src/screens/Register'
import HomePage from "./src/screens/HomePage";
import Bitcoin from "./src/screens/Bitcoin";

export default function Main() {
  return (
    <PaperProvider>
      <Bitcoin />
    </PaperProvider>
  );
}

AppRegistry.registerComponent("Hello world", () => Main);