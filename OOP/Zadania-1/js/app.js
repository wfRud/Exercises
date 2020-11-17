// ====Zadanie 1
const prod1 = {
  name: "apple",
  price: 1.4,
  wieght: 50,
};
const prod2 = {
  name: "pineapple",
  price: 1.7,
  wieght: 45,
};

console.log(prod1, prod2);
console.log(`produkt numer jeden to: ${prod1.name}`);
console.log(`produkt numer dwa to: ${prod2.name}`);
console.log(
  `produkty kosztują razem: ` + (prod1.price + prod2.price).toFixed(2)
);
console.log(`produkty ważą razem: ` + (prod1.wieght + prod2.wieght));

// ====Zadanie 2
const currentUser = {
  name: "John",
  surName: "Doe",
  email: "johndoe@gmail.com",
  www: "https://johndoe.com",
  userType: "moderator",
  show: function () {
    console.log("Imię: " + this.name);
    console.log("Nazwisko: " + this.surname);
    console.log("email: " + this.email);
    console.log("www: " + this.www);
    console.log("userType: " + this.userType);
  },
};

currentUser.show();
