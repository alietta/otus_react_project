import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const fieldInitialState: boolean[][] = [[]];
export const fieldSlice = createSlice({
  name: "field",
  initialState: fieldInitialState,
  reducers: {
    setField: (state, { payload }: PayloadAction<boolean[][]>) => {
      return (state = payload);
    },
    clearField: (state) => (state = [[]]),
  },
});

export const { actions, reducer } = fieldSlice;
