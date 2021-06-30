import React, { useContext, useState, useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens//Login";
import SignUp from "../screens/SignUp";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();
const AuthStack = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [isLogedIn, setIsLodgedIn] = useState(false);
  const { replace } = useNavigation();

  useEffect(() => {
    setIsLodgedIn(state.authenticated);
    if (isLogedIn) {
      replace("Places");
    }
  }, [state]);

  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
