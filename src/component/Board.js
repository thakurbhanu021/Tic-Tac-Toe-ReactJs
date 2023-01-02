import React, { useState } from "react";
import Square from "./Square";

import classes from "./Board.module.css";

const Board = () => {
  const [input, setInput] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true);
  
  const checkWinner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let winner of win) {
      const [a, b, c] = winner;
      if (input[a] !== null && input[a] === input[b] && input[a] === input[c]) {
        return input[a];
      }
    }
    return false;
  };
  const checkTie = () => {
    let filled = true;
    const data = [...input];
    data.forEach((item)=>{
      if(item === null){
        filled = false;
        return false;
      }
    });
    if(filled){
      return true;
    }
  }
  const winner = checkWinner();
  const tie = checkTie();

  const clickHandler = (index) => {
    if (input[index] == null) {
      const data = [...input];
      data[index] = isTurn ? "X" : "O";
      setInput(data);
      setIsTurn(!isTurn);
    } else {
      return;
    }
  };

  const PlayAgainHandler = () => {
    setInput(Array(9).fill(null));
  };

  return (
    <div className={classes.board}>
      {winner ? (
        <div className={classes.winner}>
        <p className={classes.text}>
          {winner} Won the Game
          
        </p>
        <button onClick={PlayAgainHandler} className={classes.btn}>Play Again</button>
        </div>
      ) : (tie ? (
        <div className={classes.winner}>
        <p className={classes.text}>
          {winner} It's a Tie!! So Nobody Won the game!
          
        </p>
        <button onClick={PlayAgainHandler} className={classes.btn}>Play Again</button>
        </div>
      ):
        <>
          {" "}
          <div className={classes.row}>
            <Square
              value={input[0]}
              onClick={() => {
                clickHandler(0);
              }}
            />
            <Square
              value={input[1]}
              onClick={() => {
                clickHandler(1);
              }}
            />
            <Square
              value={input[2]}
              onClick={() => {
                clickHandler(2);
              }}
            />
          </div>
          <div className={classes.row}>
            <Square
              value={input[3]}
              onClick={() => {
                clickHandler(3);
              }}
            />
            <Square
              value={input[4]}
              onClick={() => {
                clickHandler(4);
              }}
            />
            <Square
              value={input[5]}
              onClick={() => {
                clickHandler(5);
              }}
            />
          </div>
          <div className={classes.row}>
            <Square
              value={input[6]}
              onClick={() => {
                clickHandler(6);
              }}
            />
            <Square
              value={input[7]}
              onClick={() => {
                clickHandler(7);
              }}
            />
            <Square
              value={input[8]}
              onClick={() => {
                clickHandler(8);
              }}
            />
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Board;
