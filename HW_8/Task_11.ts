//es-lint ругается на name

const Obj = { name1: "Петр", surname: "Петров", age: "20 лет" };

// @ts-ignore
const { name1 = "Аноном", surname = "Анономович", age = "? лет" } = Obj;
console.log("name ==", name1.toString(), "surname ==", surname.toString(), "age ==", age.toString());
