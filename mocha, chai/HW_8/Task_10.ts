export {};
const myArr = ["petya", "masha", "dasha"];

let elem2 = "";
let elem3 = "";
const res = () => {
  elem2 = myArr[1];
  elem3 = myArr[2];
  if (elem2 == undefined) {
    console.log("bbb");
  }
  if (elem3 == undefined) {
    console.log("eee");
  }
};
res();
console.log(elem2);
console.log(elem3);

function res1() {
  elem2 = myArr[1];
  elem3 = myArr[2];
  if (elem2 == undefined) {
    console.log("bbb");
  }
  if (elem3 == undefined) {
    console.log("eee");
  }
}
res1();
console.log(elem2);
console.log(elem3);
