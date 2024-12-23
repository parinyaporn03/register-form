import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormType {
  username: string;
  password: string;
  email: string;
}

const initialState: FormType = {
  username: "",
  password: "",
  email: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<FormType>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setForm } = registerSlice.actions;

export default registerSlice.reducer;
