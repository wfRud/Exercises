Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b);
};

Array.prototype.sortNr = function () {
  return this.sort((a, b) => a - b);
};

console.log([1, 2, 3, 4, 5].sum());
console.log([1, 1.2, 23, 14, 5.4].sortNr());
