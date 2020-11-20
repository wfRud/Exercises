class Book {
  constructor() {
    const _users = [
      { name: "Adam", age: 23, phone: 668103022 },
      { name: "Piotr", age: 33, phone: 608102654 },
      { name: "Piotr", age: 63, phone: 509342546 },
    ];

    this.getUsers = () => _users;
  }

  addUser(name, age, phone) {
    this.getUsers().push({ name: name, age: age, phone: phone });
  }

  showUsers() {
    const users = () => {
      console.log(`Wszyscy użytkownicy w książce:`);
      this.getUsers().forEach((user, index) =>
        console.table(
          `
        Użytkownik ${index + 1} to: 
        Imię: ${user.name}, 
        Wiek: ${user.age},
        Telefon: ${user.phone}
        `
        )
      );
    };

    users();
  }
  findByName(name) {
    const searched = this.getUsers().filter((user) => name === user.name);

    if (searched) {
      console.log(searched[0]);
    } else {
      return false;
    }
  }
  findByPhone(phone) {
    const searched = this.getUsers().filter((user) => phone === user.phone);

    if (searched) {
      console.log(searched[0]);
    } else {
      return false;
    }
  }
  getCount() {
    console.log(`W tabeli znajduję się: ${this.getUsers().length}`);
  }
}

const book = new Book();
