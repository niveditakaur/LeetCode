var destCity = function (paths) {
  const connections = new Map();

  for (const [fromCity, toCity] of paths) {
    connections.set(fromCity, toCity);
  }

  let currentCity = paths[0][0];
  while (connections.has(currentCity)) {
    currentCity = connections.get(currentCity);
  }

  return currentCity;
};
