class Text {
  static check(txt, word) {
    const regex = new RegExp(`${word}`, "gim");
    return regex.test(txt);
  }

  static getCount(txt) {
    return txt.length;
  }

  static getWordsCount(txt) {
    const regex = /\W+/,
      transformStr = txt.replace(regex, " "),
      strArr = transformStr.split(" ");

    return strArr.length;
  }
  static setCapitalize(txt) {
    const arr = txt.split(" ");
    const bigLetterWordArr = arr.map(
      (item) => item.charAt(0).toUpperCase() + item.substr(1)
    );

    return bigLetterWordArr.join(" ");
  }

  static setMix(txt) {
    const arr = txt.split(" "),
      newArr = [];

    arr.forEach((word) => {
      let mixWord = "";
      for (let i = 0; i < word.length; i++) {
        i % 2 == 0
          ? (mixWord += word[i].toLowerCase())
          : (mixWord += word[i].toUpperCase());
      }
      newArr.push(mixWord);
    });
    return newArr.join(" ");
  }

  static generateRandom(lng) {
    const letter = "abcdefghijklmnoprstyxzABCDEFGHIJKLMNOPRSTYXZ";
    let charSet = "";

    for (let i = 0; i < lng; i++) {
      let randomNr = Math.floor(Math.random() * letter.length);
      charSet += letter[randomNr];
    }

    return charSet;
  }
}

console.log(Text.check("ala ma kota", "kota"));
console.log(Text.getCount("ala ma kota"));
console.log(Text.getWordsCount("ala ma kota"));
console.log(Text.setCapitalize("ala ma kota"));
console.log(Text.setMix("ala ma kota"));
console.log(Text.generateRandom(10));
