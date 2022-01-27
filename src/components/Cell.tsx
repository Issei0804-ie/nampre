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
  selectedNum: number;
  OnChangeCell(cellNum: number, selectedNum: number): void;
}
// prettier-ignore
export const CellContainer:React.FC<CellContainerProps> = (props)=> {
  console.log(`currentNum (in CellContainer) = ${props.selectedNum}`);
  const cellsJsx: JSX.Element[] = [];

  for (let i = 0; i < 3; i++) {
    const cells = [];
    for (let j = 0; j < 3; j++) {
      const cellNum = i * 3 + j;
      const cell = (
        <td key={cellNum}>
          <Cell
            key={cellNum}
            cellNum={props.cells[cellNum]}
            onClick={() => {
              props.OnChangeCell(cellNum, props.selectedNum);
            }}
          />
        </td>
      );
      cells.push(cell);
    }
    cellsJsx.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <table>
      <tbody>{cellsJsx}</tbody>
    </table>
  );
};

interface CellProps {
  cellNum: number;
  onClick(): void;
}

const Cell = (props: CellProps): JSX.Element => {
  let num = props.cellNum.toString();

  if (props.cellNum === -1) {
    num = "";
  }
  return (
    <div className={"cell"} onClick={props.onClick}>
      {num}
    </div>
  );
};
