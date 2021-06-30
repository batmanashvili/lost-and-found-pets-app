import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import * as Notifications from "expo-notifications";

import ReduxThunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'


import RootStack from './navigation/RootStack'
import placesReducer from './store/places-reducer'
import { init } from './helpers/db'

init().then(() => {
  console.log('Initialized database')
}).catch((err) => {console.log("db initialize failed error =>", err)} )


const rootReducer = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))


export default function App() {
  const [pushToken, setPushToken] = useState(null);

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
