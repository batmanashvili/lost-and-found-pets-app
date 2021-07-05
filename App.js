import React, { useEffect, useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import * as Notifications from "expo-notifications";

import { Provider } from 'react-redux'


import RootStack from './navigation/RootStack'
import { init } from './helpers/db'
import store from './store/store'

init().then(() => {
  console.log('Initialized database')
}).catch((err) => {console.log("db initialize failed error =>", err)} )


export default function App() {
  return (
   <Provider store={store}>
    <RootStack />
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
