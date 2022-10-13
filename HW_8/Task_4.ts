export {};
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

const sumNumbers = fibonacci.reduce((sum: number, value: number) => (sum = sum + value));
console.log(sumNumbers);

const sumNumbers1 = fibonacci.reduce(function (sum: number, value: number) {
  sum = sum + value;
  return sum;
});
console.log(sumNumbers1);
