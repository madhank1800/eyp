import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
// import { applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import userReducer from "../reducers/userReducer";
const store = configureStore({
  reducer: { auth: userReducer },
    middleware:  (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(thunk);
      },
  // Other configuration options if needed
});

export default store;
