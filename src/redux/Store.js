import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import covidreducer from './apicontainer'
const store = configureStore(
  {
    reducer: {
      log: covidreducer,
    },
  },
  // applyMiddleware(thunk)
);

export default store;
