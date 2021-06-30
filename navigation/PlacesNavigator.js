import React from "react";
import { Platform } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens//Home";
import About from "../screens/About";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();
const PlacesNavigator = () => (
  <Stack.Navigator
    initialRouteName='NewPlace'
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    }}
  >
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='About' component={About} />
  </Stack.Navigator>
);

export default PlacesNavigator;
