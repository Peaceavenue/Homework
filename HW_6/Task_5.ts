export {};
const salaries: any = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey2: 664,
  alexandra: 199,
};

let salary = 0;
let countPeople = 0;
for (const key in salaries) {
  salary = salary + salaries[key];
  countPeople = countPeople + 1;
}
const averageSalary = salary / countPeople;
console.log(averageSalary);
