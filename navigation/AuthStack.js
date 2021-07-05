import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/user/SignIn";
import SignUp from "../screens/user/SignUp";

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
