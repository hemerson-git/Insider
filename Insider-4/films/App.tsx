import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import ThemeProvider from "./src/contexts/ThemeContext";

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />

      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
