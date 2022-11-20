export {};
const arrNumbers = [5, 9, 13, 15, 24, 54, 10, 13, 99, 1, 5];

const numbers = arrNumbers.some((value: number) => {
  return value % 3 === 0 && value % 5 === 0;
});
console.log(numbers);

const numbers1 = arrNumbers.some(function (value: number) {
  return value % 3 === 0 && value % 5 === 0;
});
console.log(numbers1);
