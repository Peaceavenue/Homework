export {};
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

const people = users.map((name: string, index: number) => `member ${index + 1}: ${name}`);
console.log(people);

const people1 = users.map(function (member: string, index: number) {
  return `member ${index + 1}: ${member}`;
});
console.log(people1);
