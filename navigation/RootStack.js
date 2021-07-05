import React, { useState, useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import PlacesNavigator from "./PlacesNavigator";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";
import LoadingScreen from '../screens/user/LoadingScreen';

const Stack = createStackNavigator();
export default RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          title: "",
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={PlacesListScreen} />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        {/* <Stack.Screen name="Stack" component={PlacesNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
