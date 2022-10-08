export {};
//1
const validator: any = {};
validator.login = "Liza";
validator.password = "qwe123";
console.log(validator);

//2
const validatorAuth: any = {
  login: "Liza",
  password: "qwe123",
  auth: function (login: string, password: string) {
    if (!(login === this.login && password === this.password)) {
      return "Посторонним вход запрещен";
    } else {
      return "Добро пожаловать";
    }
  },
};
console.log(validatorAuth.auth("Liza", "qwe123"));
