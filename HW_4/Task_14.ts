export {}
const myDate: Date = new Date();

const mon = myDate.getMonth() + 1;
const year = myDate.getFullYear();
const day = myDate.getDate();
const hour = myDate.getHours();
const minute = myDate.getMinutes();
const second = myDate.getSeconds();


console.log("Текущая дата " + mon +"/" + year +"/" + day + ". Текущее время " + hour +":" + minute +":" + second);