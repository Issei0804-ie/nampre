import React, { useState } from "react";
import { CellContainer, SudokuNum } from "./Cell";
import "./board.css";

/*
export const Sample = () :JSX.Element => {
    const [currentNum, setCurrentNum] = useState<number>(-1);

    const SampleFunc = () => {
        console.log(`currentNum = ${currentNum}`);
    }

    SampleFunc();
}

 */

/*
useState 直下の currentNum = -1
Board.tsx:78 69:currentNum(CreateBoard上) = -1
Board.tsx:54 currentNum(in CreateBoard) = -1
9Cell.tsx:24 currentNum (in CellContainer) = -1
Board.tsx:89 num = 9
Board.tsx:90 setCurrentNum!!!
Board.tsx:14 useState 直下の currentNum = 9
Board.tsx:78 69:currentNum(CreateBoard上) = 9
Board.tsx:54 currentNum(in CreateBoard) = 9
Board.tsx:66 currentNum(in CellContainer OnChangeCell) = -1
Board.tsx:38 onChangeCell!!!
Board.tsx:40 num =  -1
Board.tsx:41 containerNum = 2  |  cellNum = 8
Board.tsx:42 copyBoardInfo = -1,-1,-1,-1,-1,-1,-1,-1,-1
Board.tsx:44 copyBoardInfo = -1,-1,-1,-1,-1,-1,-1,-1,-1
Board.tsx:54 currentNum(in CreateBoard) = -1
Board.tsx:14 useState 直下の currentNum = 9
Board.tsx:78 69:currentNum(CreateBoard上) = 9
Board.tsx:54 currentNum(in CreateBoard) = 9
9Cell.tsx:24 currentNum (in CellContainer) = -1
 */

export const Board = (): JSX.Element => {
  const [currentNum, setCurrentNum] = useState<number>(SudokuNum.NON);
  console.log(`useState 直下の currentNum = ${currentNum}`);
  let boardInfo = [
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

  //prettier-ignore
  const onChangeCell = (cellNum: number, containerNum: number, num:number)  => {
    console.log("onChangeCell!!!")
    const  copyBoardInfo = boardInfo;
    console.log(`num =  ${num}`);
    console.log(`containerNum = ${containerNum}  |  cellNum = ${cellNum}`);
    console.log(`copyBoardInfo = ${copyBoardInfo[containerNum]}`);
    copyBoardInfo[containerNum][cellNum] = num;
    console.log(`copyBoardInfo = ${copyBoardInfo[containerNum]}`);
    // -----------------犯人-------------------
    // -----------------犯人-------------------
    // -----------------犯人-------------------
    const newBoardJsx = CreateBoard(copyBoardInfo, num);
    // -----------------犯人-------------------
    // -----------------犯人-------------------
    // -----------------犯人-------------------
    setBoardJsx(newBoardJsx);
    boardInfo = copyBoardInfo;
    // ゲーム終了判定
  }

  // prettier-ignore
  const CreateBoard = (board:SudokuNum[][], num1:number):JSX.Element[] =>{
    console.log(`currentNum(in CreateBoard) = ${num1}`)
    const rows: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const num = i * 3 + j;
        const container = (
            <CellContainer
                key={num}
                cells={board[num]}
                selectedNum={num1}
                OnChangeCell={(cellNum: number, selectedNum:number) => {
                  console.log(`currentNum(in CellContainer OnChangeCell) = ${selectedNum}`)
                  onChangeCell(cellNum, num, selectedNum);
                }}
            />
        );
        row.push(container);
      }
      rows.push(<div key={i} className={"row"}>{row}</div>);
    }
    return rows
  }

  console.log(`69:currentNum(CreateBoard上) = ${currentNum}`);
  const board = CreateBoard(boardInfo, currentNum);
  const [boardJsx, setBoardJsx] = useState<JSX.Element[]>(board);

  const numButtonsJsx = [];
  for (let i = 0; i < 9; i++) {
    const button = (
      <button
        key={i}
        onClick={() => {
          const num = i + 1;
          console.log(`num = ${num}`);
          console.log("setCurrentNum!!!");
          setCurrentNum(num);
          setBoardJsx(CreateBoard(boardInfo, num));
        }}
      >
        {i + 1}
      </button>
    );
    numButtonsJsx.push(button);
  }

  return (
    <div className={"BoardContainer"}>
      <div>{boardJsx}</div>
      <div> {currentNum} is current num</div>
      <div>{numButtonsJsx}</div>
      <button
        onClick={() => {
          setBoardJsx(CreateBoard(boardInfo, currentNum));
        }}
      >
        破滅の刃
      </button>
    </div>
  );
};

export const Sample = (): JSX.Element => {
  const [sampleNum, setSampleNum] = useState<number>(-1);

  const SampleFunc = () => {
    console.log(`sampleNum= ${sampleNum}`);
    const hoge = sampleNum;
    console.log(hoge);
  };

  SampleFunc();
  return (
    <div>
      <button
        onClick={() => {
          setSampleNum(1);
        }}
      >
        hogehogehoge
      </button>
      <button
        onClick={() => {
          SampleFunc();
        }}
      >
        gufueffuaspfaefa
      </button>
    </div>
  );
};
