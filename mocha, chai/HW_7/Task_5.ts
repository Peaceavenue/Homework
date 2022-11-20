export {};
const cats = ["Gachito", "Tom", "Batman"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

for (const name of cats) {
  console.log(name);
}
