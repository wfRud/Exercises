String.prototype.sortText = function (char) {
  return this.split(" ").sort().join(char);
};

const text = "Zbigniew Ania Piotrek Julia".sortText("-");
const text2 = "Darek Agata Zenon Katarzyna Iga".sortText("-");

console.dir(text);
console.dir(text2);
