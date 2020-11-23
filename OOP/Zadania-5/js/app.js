class TableGenerator {
  constructor() {}

  randomNUmber(min, max) {
    if (arguments.length < 2) {
      throw Error(`Put "min", "max" argument into the function`);
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateIncTable(lng) {
    const arr = [];
    let number = 0;
    if (!arguments.length) {
      throw Error(`Put array length into the function`);
    }
    while (arr.length <= lng) {
      arr.push(number++);
    }
    return arr;
  }

  generateRandomTable(lng, min, max) {
    const arr = [];
    if (arguments.length < 3) {
      throw Error(`Put "lng", min", "max" argument into the function`);
    }
    while (arr.length <= lng) {
      let randomNr = this.randomNUmber(min, max);
      arr.includes(randomNr)
        ? (randomNr = this.randomNUmber(min, max))
        : arr.push(randomNr);
    }
    return arr;
  }

  generateTableFromText(str) {
    if (typeof str !== "string") {
      return [];
    }
    const regex = /\W+/g,
      replacedStr = str.replace(regex, " ");
    return replacedStr.split(" ");
  }

  getMaxFromTable(arr) {
    return Math.max(...arr);
  }
  getMinFromTable(arr) {
    return Math.min(...arr);
  }
  delete(arr, index) {
    return arr.splice(index, 1);
  }
}

const tg = new TableGenerator();
const str = "Lorem,   ipsum.dolor/sit,amet";

const randomNr = tg.randomNUmber(2, 10);
const generateIncTable = tg.generateIncTable(6);
const generateRandomTable = tg.generateRandomTable(6, 2, 10);
const generateTableFromText = tg.generateTableFromText(str);
const getMaxFromTable = tg.getMaxFromTable(generateRandomTable);
const getMinFromTable = tg.getMinFromTable(generateRandomTable);
const deleteIndex = tg.delete(generateIncTable, 2);

console.log(randomNr);
console.log(generateIncTable);
console.log(generateRandomTable);
console.log(generateTableFromText);
console.log(getMaxFromTable);
console.log(getMinFromTable);
console.log(deleteIndex);
