import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementByAmount: (state, action) => {
        state.count -= Number(action.payload);
      },
  },
});

export const { increment, decrement, incrementByAmount,decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
