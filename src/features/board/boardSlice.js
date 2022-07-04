import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vector: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  result: null,
  playerTurn: null,
};

export const boardSlice = createSlice({
  name: "board",
  initialState: initialState, // You can write shorthand with only "initialState".
  reducers: {
    setVector: (state, action) => {
      const { vector } = action.payload;
      state.vector = vector;
    },
    setPlayerTurn: (state, action) => {
      const nextPlayerTurn = action.payload;
      state.playerTurn = nextPlayerTurn;
    },
    updateVector: (state, action) => {
      const colIndex = action.payload[1];
      const rowIndex = action.payload[0];
      state.vector[rowIndex][colIndex] = state.playerTurn === 1 ? "X" : "O";
    },
    setResult: (state, action) => {
      const finalResult = action.payload;
      state.result = finalResult;
    },
    setResetGame: () => {
      return initialState;
    },
  },
  extraReducers: {},
});

export const {
  setVector,
  setPlayerTurn,
  updateVector,
  setResult,
  setResetGame,
} = boardSlice.actions;

export default boardSlice.reducer;
