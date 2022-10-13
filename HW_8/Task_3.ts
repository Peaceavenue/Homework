export {};
const numbers = [7, -4, 32, -90, 54, 32, -21];

const positiveNumbers = numbers.filter((availableNumbers: number) => availableNumbers > 0);
console.log(positiveNumbers);

const positiveNumbers1 = numbers.filter(function (availableNumbers: number) {
  return availableNumbers >= 0;
});
console.log(positiveNumbers1);
