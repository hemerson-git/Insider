import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default StackRoutes;
