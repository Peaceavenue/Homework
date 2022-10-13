export {};
const numbers = [1, 2, 5, 10];

const sumNumbers = numbers.every((value: number) => {
  const squareRoot = numbers.map((value) => Math.pow(value, 2));
  const sum = squareRoot.reduce((acc, value) => acc + value, 0);
  const sum1 = String(sum);
  let a = 0;
  for (let i = 0; i < sum1.length; i++) {
    a = a + Number(sum1[i]);
  }
  return a % 2 == 0;
});
console.log(sumNumbers);

const sumNumbers1 = numbers.every(function (value: number) {
  const squareRoot = numbers.map((value) => Math.pow(value, 2));
  const sum = squareRoot.reduce((acc, value) => acc + value, 0);
  const sum1 = String(sum);
  let a = 0;
  for (let i = 0; i < sum1.length; i++) {
    a = a + Number(sum1[i]);
  }
  return a % 2 == 0;
});
console.log(sumNumbers1);
