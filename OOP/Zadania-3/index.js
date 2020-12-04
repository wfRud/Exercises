class CheckSpeller {
  constructor(field, words) {
    this.getField = () => _field;
    this.getWords = () => _words;
    this.getRegex = () => _regex;

    const _field = field,
      _words = words.split(/, */),
      _regex = new RegExp(`${this.getWords().join("|")}`, "igm");

    this.assignEvent();
  }

  assignEvent() {
    this.getField().addEventListener(
      "input",
      function () {
        this.replaceWord();
      }.bind(this)
    );
  }

  replaceWord() {
    this.getField().value = this.getField().value.replace(
      this.getRegex(),
      function (match) {
        return this.randomCharacter(match);
      }.bind(this)
    );
  }

  randomCharacter(word) {
    const charset = "!@#$%^&*";
    let replaceWord = "";
    for (let i = 0; i < word.length; i++) {
      let randomNr = Math.floor(Math.random() * word.length);
      replaceWord += charset[randomNr];
    }
    return replaceWord;
  }
}

const checkSpeller = new CheckSpeller(
  document.getElementById("textInput"),
  "sada, pet, szkola"
);
