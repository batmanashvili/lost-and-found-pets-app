import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  View,
  Button,
  Text,
  Alert,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import * as authActions from "../../store/actions/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const loginHandler = () => {
    console.log(state, "state inside login");
    dispatch(authActions.signIn(email, password));
    Alert.alert("you're loged in!");
    navigate("Places");
  };

  const registerRouteHandler = () => {
    Alert.alert("register here");
    navigate("Auth", { screen: "SignUp" });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> You can login or register here </Text>

      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </SafeAreaView>

      <Button
        title="SIGNIN"
        style={{ width: 10, height: 3, margin: 5 }}
        onPress={loginHandler}
      />
      <Button
        title="Register"
        style={{ width: 10, height: 3, margin: 5 }}
        onPress={registerRouteHandler}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
  },
});
