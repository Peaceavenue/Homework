export {};
const myObj = {
  name: "Лиза",
  age: 31,
};

if ("age" in myObj) {
  console.log(true);
} else {
  console.log(false);
}
