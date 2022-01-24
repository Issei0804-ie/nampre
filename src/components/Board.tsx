import React, { useState } from "react";
import { CellContainer, SudokuNum } from "./Cell";
import "./board.css";

export const Board = (): JSX.Element => {
  const [currentNum, setCurrentNum] = useState<SudokuNum>(SudokuNum.NON);
  const board = [
    //prettier-ignore
    [SudokuNum.ONE, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,],
    //prettier-ignore
    [SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,],
    //prettier-ignore
    [SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,],
    //prettier-ignore
    [SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,],
    //prettier-ignore
    [SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,],
    //prettier-ignore
    [SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,],
    //prettier-ignore
    [SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,],
    //prettier-ignore
    [SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,],
    //prettier-ignore
    [SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON, SudokuNum.NON,],
  ];

  const OnChangeCell = (cellNum: number, containerNum: number) => {
    console.log(`board = ${containerNum + 1}, cell = ${cellNum + 1}`);
    let oldBoard = board;
    oldBoard[containerNum][cellNum] = currentNum;

    // ゲーム終了判定
  };

  let rows: JSX.Element[] = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      const num = i * 3 + j;
      const container = (
        <CellContainer
          cells={board[num]}
          OnChangeCell={(cellNum: number) => {
            OnChangeCell(cellNum, num);
          }}
        />
      );
      row.push(container);
    }
    rows.push(<div className={"row"}>{row}</div>);
  }

  let numButtonsJsx = [];
  for (let i = 0; i < 9; i++) {
    const button = (
      <button
        onClick={() => {
          setCurrentNum(i + 1);
        }}
      >
        {" "}
        {i + 1}{" "}
      </button>
    );
    numButtonsJsx.push(button);
  }

  return (
    <div className={"BoardContainer"}>
      <div>{rows}</div>
      <div> {currentNum}is current num</div>
      <div>{numButtonsJsx}</div>
    </div>
  );
};
