import React from "react"

const digits = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
];

const Cell = ({ row, col, grid }) => {
  const name = row + col;

  if (!(grid && grid[name])) {
    return "";
  }

  if (grid[name].length > 1) {
    return (
      <table className="Sudoku-tiny">
        <tbody>
          { digits.map(r => 
              <tr key={r.join("")}>
                { r.map(c =>
                  <td className="Sudoku-tiny" key={c}>{grid[name].indexOf(c) >= 0 ? c : ""}</td>
                )}
              </tr>
          )}
        </tbody>
      </table>
    )
  }


  return /[1-9]/.test(grid[name]) ? grid[name] : "";
}

export default Cell;