import React from "react";
import Block from "./Block";

const rows = ["ABC", "DEF", "GHI"];
const cols = ["123", "456", "789"];

const Grid = ({ grid }) =>
  <table className="Sudoku-table">
    <tbody>
      { rows.map(r => 
        <tr key={r}>
          { cols.map(c =>
            <td key={c} className="Sudoku-cell">
              <Block rows={r} cols={c} grid={grid} />
            </td>
          )}
        </tr>
      ) }
    </tbody>
  </table>

export default Grid;
