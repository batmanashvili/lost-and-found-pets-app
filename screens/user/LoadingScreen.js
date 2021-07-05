import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import * as authActions from "../../store/actions/auth";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [triedToLogin, setTriedToLogin] = useState(false);
  const isAuthenticated = useSelector((state) => !!state.auth.token);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  useEffect(() => {
    const tryLogin = async () => {
      try {
        const response = await AsyncStorage.getItem("userData");
        if (!response) {
          console.log("no data returned from async storage ....");
          ALert.alert("no data for autoLogin");
          setTriedToLogin(true);
          navigate("Auth");
          return;
        }

        const { userId, token } = JSON.parse(response);

        if (!userId || !token) {
          console.log("no user id or token was found, please sign  In");
          navigate("Auth");
          return;
        }

        dispatch({
          type: authActions.SIGNIN,
          payload: { userId: userId, token: token },
        });
        navigate("Main");
      } catch (err) {
        console.log(err);
      }
    };
    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.spinner}>
      <ActivityIndicator color="black" size={50} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
