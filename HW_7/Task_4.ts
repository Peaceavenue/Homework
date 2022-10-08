export {};
const students = ["Polina", "Dasha", "Masha"];
// @ts-ignore
students.pop();
console.log(students);
students.push("Borya");
console.log(students);
students.shift();
console.log(students);
students.unshift("Andrey");
console.log(students);
