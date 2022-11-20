export {};
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log(numbers);

// и

const numbers1 = [5, 43, 63, 23, 90];
console.log(numbers1.slice(0, 0));

// или

const numbers2: number[] = [5, 43, 63, 23, 90];
for (let i = 0; i < numbers2.length; i++) {
  delete numbers2[i];
}
console.log(numbers2);

// или

const numbers3: number[] = [5, 43, 63, 23, 90];
for (const item in numbers3) {
  delete numbers3[item];
}
console.log(numbers3);
