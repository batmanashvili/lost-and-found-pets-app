import React, { useState, useContext } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const signUpHandler = () => {
    dispatch(signUp(email, password));
    navigate("Places");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="useless placeholder"
      />

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
        title="SignUp"
        style={{ width: 10, height: 3 }}
        onPress={signUpHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "80%",

    margin: 12,
    borderWidth: 1,
  },
});
