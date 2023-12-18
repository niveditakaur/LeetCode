var onesMinusZeros = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const diff = new Array(m).fill(0).map(() => new Array(n).fill(0));

  const onesRow = new Array(m).fill(0);
  const zerosRow = new Array(m).fill(0);
  const onesCol = new Array(n).fill(0);
  const zerosCol = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        onesRow[i]++;
        onesCol[j]++;
      } else {
        zerosRow[i]++;
        zerosCol[j]++;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
    }
  }

  return diff;
};
