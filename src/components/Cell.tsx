import React from "react";
import "./row.css";

export enum SudokuNum {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  NON = -1,
}

interface CellContainerProps {
  cells: number[];
  OnChangeCell(cellNum: number): void;
}
export const CellContainer = (props: CellContainerProps): JSX.Element => {
  let cellsJsx: JSX.Element[] = [];

  for (let i = 0; i < 3; i++) {
    const cellNum = i * 3;
    const cell = (
      <tr>
        <td>
          <Cell
            cellNum={props.cells[i]}
            onClick={() => {
              console.log("clicked");
              props.OnChangeCell(cellNum);
            }}
          />
        </td>

        <td>
          <Cell
            cellNum={props.cells[i + 1]}
            onClick={() => {
              console.log("clicked");
              props.OnChangeCell(cellNum + 1);
            }}
          />
        </td>
        <td>
          <Cell
            cellNum={props.cells[i + 2]}
            onClick={() => {
              console.log("clicked");
              props.OnChangeCell(cellNum + 2);
            }}
          />
        </td>
      </tr>
    );

    cellsJsx.push(cell);
  }

  return (
    <table>
      <div>{cellsJsx}</div>
    </table>
  );
};

interface CellProps {
  cellNum: number;
  onClick(): void;
}

const Cell = (props: CellProps): JSX.Element => {
  let num = props.cellNum.toString();

  if (props.cellNum == -1) {
    num = "";
  }
  return (
    <div className={"cell"} onClick={props.onClick}>
      {num}
    </div>
  );
};
