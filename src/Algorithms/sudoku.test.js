import {
  rows,
  cols,
  squares,
  unitlist,
  units,
  peers
} from "./sudoku";

it('sudoku has 81 squares', () => {
  expect(squares).toHaveLength(81);
})

it('sudoku has 27 unitlists', () => {
  expect(unitlist).toHaveLength(27);  
})

it("all cells appear in 3 units", () => {
  expect.assertions(81);
  squares.forEach(s => expect(units[s]).toHaveLength(3));
})

it("units for C2 matches", () => {
  expect(units["C2"]).toEqual([
    ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'],
    ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']
  ]);
})

it("all cells to have 20 peers", () => {
  expect.assertions(81);
  squares.forEach(s => expect(peers[s]).toHaveLength(20));
})

it("peers for C2 matches", () => {
  expect(peers["C2"]).toEqual([
    'A2', 'B2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2',
    'C1', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9',
    'A1', 'A3', 'B1', 'B3'
  ]);
})