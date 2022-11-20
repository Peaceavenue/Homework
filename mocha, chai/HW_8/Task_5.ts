export {};
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

const evenNumber = numbers.find((value: number) => value % 2 == 0);
console.log(evenNumber);

const evenNumber1 = numbers.find(function (value: number) {
  return value % 2 == 0;
});
console.log(evenNumber1);
