import React from "react";
import Cell from "./Cell";

const Block = ({ rows, cols, grid }) => 
  <table className="Sudoku-table">
    <tbody>
      { rows.split("").map(r => 
        <tr key={r}>
          { cols.split("").map(c =>
            <td key={c} className="Sudoku-cell Sudoku-value">
              <Cell row={r} col={c} grid={grid} />
            </td>
          )}
        </tr>
      ) }
    </tbody>
  </table>

export default Block;
