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
  const values = {};
  squares.map(s => values[s] = digits);
  const dict = gridValues(grid);
  Object.keys(dict).forEach(s => {
    if (dict[s] != 0) {
      assign(values, s, dict[s])
    }
  })
  return values;
}

export function assign(values, s, d) {
  console.log("assign", s, d)
  const other = values[s].filter(x => x != d);
  if (!other.every(d2 => eliminate(values, s, d2))) {
    return false;
  }
  return values;
}

export function eliminate(values, s, d) {
  if (values[s].indexOf(d) == -1) return values; 
  values[s] = values[s].filter(x => x != d);
  if (values[s].length == 0) return false;
  if (values[s].length == 1) {
    const d2 = values[s][0];
    if (!peers[s].every(s2 => eliminate(values, s2, d2))) {
      return false;
    }
  }
  return values;
}