class Enemy {
  constructor(name, speed, attack, posX) {
    const live = 5;
    this.name = name;
    this.live = live;
    this.speed = speed;
    this.attack = attack;
    this.posX = posX;
  }

  move() {
    let currentPosition = (this.posX = this.posX - this.speed);

    if (currentPosition <= 0) {
      this.posX = Math.floor(Math.random() * 600);
      console.log(`Wyszedłes poza mapę. Twoja nowa pozycja to ${this.posX}`);
    } else {
      console.log(`Jestem ${this.name}. Znajduję się na pozycji ${this.posX}`);
    }
  }
  attackEnemy() {
    console.log(
      `Jestem ${this.name}. Atakuję gracza z pozycji ${this.posX} z siłą ${this.attack}`
    );
  }
  hit() {
    this.live--;
    if (this.live > 0) {
      console.log(`Jestem ${this.name}. Mam teraz życia ${this.live}`);
    } else {
      console.log(`Jestem ${this.name} i właście zginąłem`);
    }
  }
}

const e1 = new Enemy("Ork", 12, 5, 70);
const e2 = new Enemy("Człowiek", 18, 5, 110);

console.log(e1);
