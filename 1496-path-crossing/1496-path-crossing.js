var isPathCrossing = function (path) {
  let x = 0,
    y = 0;
  const visited = new Set();
  visited.add("0,0");

  for (let direction of path) {
    if (direction === "N") y++;
    else if (direction === "S") y--;
    else if (direction === "E") x++;
    else if (direction === "W") x--;

    const currentPosition = `${x},${y}`;
    if (visited.has(currentPosition)) {
      return true;
    }

    visited.add(currentPosition);
  }

  return false;
};
