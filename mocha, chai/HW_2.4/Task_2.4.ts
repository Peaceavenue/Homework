export class Calculator {
  constructor() {}

  add(a: number, b: number) {
    return a + b;
  }

  sub(a: number, b: number) {
    return a - b;
  }

  multi(a: number, b: number) {
    return a * b;
  }

  divis(a: number, b: number) {
    return a / b;
  }

  remain(a: number, b: number) {
    return a % b;
  }

  deg(a: number, b: number) {
    return a ** b;
  }
}
const newCalculator = new Calculator();

const res1 = newCalculator.add(3, 4) === 7 ? "Тест прошел" : "Тест провален";
console.log(res1);
const res2 = newCalculator.add(5, 5) === 9 ? "Тест прошел" : "Тест провален";
console.log(res2);
const res3 = newCalculator.sub(4, 3) === 2 ? "Тест прошел" : "Тест провален";
console.log(res3);
const res4 = newCalculator.sub(5, 7) === -2 ? "Тест прошел" : "Тест провален";
console.log(res4);
const res5 = newCalculator.multi(3, 2) === 7 ? "Тест прошел" : "Тест провален";
console.log(res5);
const res6 = newCalculator.multi(0, 0) === 0 ? "Тест прошел" : "Тест провален";
console.log(res6);
const res7 = newCalculator.divis(6, 2) === 3 ? "Тест прошел" : "Тест провален";
console.log(res7);
const res8 = newCalculator.divis(9, 3) === 2 ? "Тест прошел" : "Тест провален";
console.log(res8);
const res9 = newCalculator.remain(10, 3) === 1 ? "Тест прошел" : "Тест провален";
console.log(res9);
const res10 = newCalculator.remain(20, 6) === 3 ? "Тест прошел" : "Тест провален";
console.log(res10);
const res11 = newCalculator.deg(2, 3) === 8 ? "Тест прошел" : "Тест провален";
console.log(res11);
const res12 = newCalculator.deg(3, 3) === 28 ? "Тест прошел" : "Тест провален";
console.log(res12);
