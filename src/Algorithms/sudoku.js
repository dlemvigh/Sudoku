export function cross(A, B) {
  const C = [];
  for (let a of A) {
    for (let b of B) {
      C.push(a + b);
    }
  }
  return C;
}

export const digits   = "123456789".split("");
export const rows     = "ABCDEFGHI".split("");
export const cols     = digits;
export const squares  = cross(rows, cols);


export const unitlist = [
  ...cols.map(c => cross(rows, c)),
  ...rows.map(r => cross(r, cols)),
  ...[].concat(...[rows.slice(0,3), rows.slice(3,6), rows.slice(6)].map(rs => {
    return [cols.slice(0,3), cols.slice(3,6), cols.slice(6)].map(cs => {
      return cross(rs, cs)
    })
  }))
];

export const units = {};
squares.forEach(s => {
  units[s] = unitlist.filter(u => u.indexOf(s) >= 0)
});

export const peers = {};
squares.forEach(s => {
  const p = new Set();
  units[s].forEach(u => u.forEach(x => p.add(x)));
  p.delete(s);
  peers[s] = Array.from(p);
})

export function gridValues(grid) {
  const dict = {};
  for (let s in squares) {
    dict[squares[s]] = grid[s];
  }
  return dict;
}

export function parseGrid(grid) {
  
}

export function assign(values, s, d) {

}

export function eliminate(values, s, d) {
  
}