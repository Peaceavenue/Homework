export {}

const min = Math.ceil(5.56);
const max = Math.floor(20.34);
const res = Math.floor(Math.random() * (max-min)) + min;
console.log(res);

//или

const min1 = 5;
const max1 = 20.34;
const res1 = Math.floor(Math.random() * (max-min)) + min;
console.log(res1);