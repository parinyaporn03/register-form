import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import registerReducer from "../feature/register/registerSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
