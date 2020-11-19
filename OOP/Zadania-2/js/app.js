const spaceShip = {
  name: "Enterprise",
  currentLocation: "Eart",
  flyDistance: 0,

  flyTo: function (place, distance) {
    this.currentLocation = place;
    this.flyDistance += distance;
  },

  showInfo: function () {
    const info = `
      Informacje o Statku 
      --------------------
      Statek: ${this.name}
      Doleciał do miejsca: ${this.currentLocation}
      Statek przeleciał już całkowity dystans: ${this.flyDistance}
      `;

    console.log(info);
  },

  meetClingon: function () {
    let counter = 0,
      positive = 0,
      negative = 0;
    while (++counter < 100) {
      Math.floor(Math.random() * 2) ? negative++ : positive++;
    }
    positive > negative
      ? console.log(
          `Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`
        )
      : console.warn(
          `Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`
        );
  },
};
