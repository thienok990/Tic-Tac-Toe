import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Element } from "./Element";
import { Button } from "./Button";
import { setResult, setPlayerTurn } from "../../features/board/boardSlice";

export const Board = () => {

  const vector = useSelector((state) => state.board.vector);
  const playerTurn = useSelector((state) => state.board.playerTurn);
  const result = useSelector((state) => state.board.result);

  const nextPlayerTurn = playerTurn === 1 ? 2 : 1;
  const dispatch = useDispatch();

  const getResultText = () => {
    let text = "";
    switch (result) {
      case 0:
        text = "Draw";
        break;
      case 1:
        text = "Player 1 win";
        break;
      case 2:
        text = "Player 2 win";
        break;
      default:
        break;
    }
    return text;
  };

  useEffect(() => {
    let isWin = false;
    for (let i = 0; i < 3; i++) {
      if (
        vector[i][0] === vector[i][1] &&
        vector[i][0] === vector[i][2] &&
        vector[i][0] !== ""
      ) {
        isWin = true;
      }
      if (
        vector[0][i] === vector[1][i] &&
        vector[0][i] === vector[2][i] &&
        vector[0][i] !== ""
      ) {
        isWin = true;
      }
    }
    if (
      vector[0][0] === vector[1][1] &&
      vector[0][0] === vector[2][2] &&
      vector[0][0] !== ""
    ) {
      isWin = true;
    }
    if (
      vector[0][2] === vector[1][1] &&
      vector[0][2] === vector[2][0] &&
      vector[0][2] !== ""
    ) {
      isWin = true;
    }

    if (isWin) {
      dispatch(setResult(playerTurn));
    } else {
      let isFull = true;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (vector[i][j] === "") {
            isFull = false;
          }
        }
      }
      if (isFull) {
        dispatch(setResult(0));
      }
    }
    dispatch(setPlayerTurn(nextPlayerTurn));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vector]);
  
  return (
    <div>
      <h1>Player:{playerTurn}</h1>
      <div className="board">
        <table>
          <tbody>
            {vector.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {row.map((value, colIndex) => {
                    return (
                      <Element
                        key={colIndex}
                        value={value}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                        playerTurn={playerTurn}
                        vector={vector}
                        result={result}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h1>Result: {getResultText()}</h1>
      <Button result={result} />
    </div>
  );
};
