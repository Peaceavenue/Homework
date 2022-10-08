export {};
const student: any = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (const objKey in student) {
  console.log(`objKey ==> ${objKey}`);
}

for (const objKey in student) {
  console.log(`objValue ==> ${student[objKey]}`);
}
