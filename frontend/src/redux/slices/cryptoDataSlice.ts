import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type data = {
  code: string;
  price: number;
};
const initialState: data[] = [];
const cryptoDataSlice = createSlice({
  name: "cryptoData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<any[]>) => {
      return action.payload;
    },
  },
});
export const { addData } = cryptoDataSlice.actions;

export default cryptoDataSlice.reducer;
