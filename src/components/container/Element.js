import React from "react";
import { useDispatch } from "react-redux";
import { updateVector } from "../../features/board/boardSlice";

export const Element = (props) => {
  const { value, colIndex, rowIndex, result } = props;
  const dispatch = useDispatch();

  function handleClick() {
    if (value === "") {
      dispatch(updateVector([rowIndex, colIndex]));
    }
  }

  function stopGame() {
    if (result === null) {
      handleClick();
    }
  }
  
  return <td onClick={stopGame}>{value}</td>;
};
