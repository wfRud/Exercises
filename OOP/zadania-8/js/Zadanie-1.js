class Car {
  constructor(name, brand, engine, mile, age) {
    this.name = name;
    this.brand = brand;
    this.engine = engine;
    this.mile = mile;
    this.age = age;
  }

  printDetails() {
    // let keyLength = [];
    // for (let prop in this) {
    //   keyLength.push(prop.length);
    // }
    // let longest = Math.max(...keyLength);
    // for (let prop in this) {
    //   if (prop.length < longest) {
    //     let diff = longest - prop.length;
    //     console.log(
    //       `%c${prop}${" ".repeat(diff)}: %c${this[prop]}`,
    //       "font-size: 16px;",
    //       "color:green; font-size: 16px;"
    //     );
    //   }
    // }
    console.log(
      `%c
      Name   : === ${this.name} ===
      Brand  : === ${this.brand} ===
      Engine : === ${this.engine} ===
      Mile   : === ${this.mile} ===
      Age    : === ${this.age} ===
    `,
      "font-size: 18px; color: salmon"
    );
  }
}

const car1 = new Car("W124", "Mercedes", 1.6, 100.0, 35);
const car2 = new Car("80", "Audi", 20, 84.0, 29);
const car3 = new Car("Golf", "WV", 1.2, 94.0, 30);

car1.printDetails();
car2.printDetails();
car3.printDetails();
