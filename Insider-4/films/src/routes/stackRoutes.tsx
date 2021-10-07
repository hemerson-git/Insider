import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Search from "../pages/Search";

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

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Sua Pesquisa",
          headerShown: true,
          headerStyle: { backgroundColor: "#141a29" },
          headerTintColor: "#FFF",
        }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
