// @ts-nocheck

import React , { useContext }from "react";
import { View, Text, Alert, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../context/AuthContext'

const Home = () => {
  const { navigate } = useNavigation()
  const { state, dispatch } = useContext(AuthContext)
  
    const logOutHandler = () => {
      dispatch({type: "LOGOUT"})
      navigate('Auth')
      Alert.alert(state)
      let tmp =  dispatch({type: "GET_AUTH_STATE"})
      Alert.alert(tmp)
    }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome Home</Text>
      <Button title="About" onPress={() => navigate('About')} />
      <Button title="Log out" onPress={() => logOutHandler} />
    </View>
  );
};

export default Home;

