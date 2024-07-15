import { configureStore } from "@reduxjs/toolkit";
import cryptoDataReducer from "./slices/cryptoDataSlice";

export const store = configureStore({
  reducer: {
    cryptoData: cryptoDataReducer,
  },
});
