var numSpecial = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  let count = 0;

  function isSpecialCell(row, col) {
    if (mat[row][col] === 1) {
      let rowSum = 0;
      for (let c = 0; c < cols; c++) {
        rowSum += mat[row][c];
      }
      if (rowSum === 1) {
        let colSum = 0;
        for (let r = 0; r < rows; r++) {
          colSum += mat[r][col];
        }
        if (colSum === 1) {
          count++;
        }
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      isSpecialCell(i, j);
    }
  }

  return count;
};
