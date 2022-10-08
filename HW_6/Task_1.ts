export {};
const myObj: any = {
  name: "Лиза",
  age: 31,
};

delete myObj.name;
delete myObj.age;
console.log(myObj);
