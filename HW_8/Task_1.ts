export {};
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach((value: number) => {
  console.log("value = ", value);
});

fibonacci.forEach(function (value: number) {
  console.log("value = ", value);
});