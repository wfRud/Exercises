const spaceShip = {
  name: "Enterprise",
  currentLocation: "Earth",
  flyDistance: 0,

  flyTo(place, distance) {
    this.currentLocation = place;
    this.flyDistance += distance;
  },

  showInfo() {
    const info = `
      Informacje o Statku 
      --------------------
      Statek: ${this.name}
      Doleciał do miejsca: ${this.currentLocation}
      Statek przeleciał już całkowity dystans: ${this.flyDistance}
      `;

    console.log(info);
    return info;
  },

  meetClingon() {
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
    console.log(positive, negative);
  },
};
