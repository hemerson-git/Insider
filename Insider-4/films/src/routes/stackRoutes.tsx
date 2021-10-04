import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Details"
        component={MovieDetails}
        options={{ title: "Detalhes" }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
