import React from "react";
import { useDispatch } from "react-redux";
import { setResetGame } from "../../features/board/boardSlice";

export const Button = (props) => {
  const { result } = props;
  const dispatch = useDispatch();

  function resetGame() {
    dispatch(setResetGame());
  }

  if (result !== null) return <button onClick={resetGame}>Reset Game</button>;
};
