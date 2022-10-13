export {};
const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];

let setCollection = new Set();
const newArr = (numb: any) => {
  for (const value of numb) {
    setCollection.add(value);
  }
  return Array.from(setCollection);
};
console.log(newArr(numbers));

function newArr1(numb: any) {
  for (const value of numb) {
    setCollection.add(value);
  }
  return Array.from(setCollection);
}
console.log(newArr1(numbers));
