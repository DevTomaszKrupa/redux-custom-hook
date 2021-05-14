import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userStore from "./userStore";

const rootReducer = combineReducers({
  user: userStore,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
