import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "./result-slice";

const store = configureStore({ reducer: { result: resultReducer } });

export default store;