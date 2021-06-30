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

import { AuthContext } from "../context/AuthContext";
import { signIn } from "../context/actions";

const Login = () => {
  const { navigate, replace } = useNavigation();
  const { state, dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    Alert.alert("you're loged in!");

    console.log(state, "state inside login");
    signIn(email, password);
    replace("Places");
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
        title='SIGNIN'
        style={{ width: 10, height: 3, margin: 5 }}
        onPress={loginHandler}
      />
      <Button
        title='Register'
        style={{ width: 10, height: 3, margin: 5 }}
        onPress={registerRouteHandler}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
  },
});
