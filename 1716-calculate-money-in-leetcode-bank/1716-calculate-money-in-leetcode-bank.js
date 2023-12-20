var totalMoney = function (n) {
  let total = 0;
  let mondayDeposit = 1;

  for (let i = 0; i < n; i++) {
    total += mondayDeposit + Math.floor(i % 7);
    if ((i + 1) % 7 === 0) {
      mondayDeposit++;
    }
  }

  return total;
};
