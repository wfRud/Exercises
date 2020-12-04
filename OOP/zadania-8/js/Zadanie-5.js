String.prototype.mirror = function () {
  return this.split("").reverse().join(" ");
};

console.log("Nie chcę mi się dzisiaj okropnie".mirror());
