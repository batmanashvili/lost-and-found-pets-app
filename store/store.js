import React from "react";

import ReduxThunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";

import placesReducer from "./store/places-reducer";
import authReducer from "./store/reducers/auth";

const rootReducer = combineReducers({
  places: placesReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
