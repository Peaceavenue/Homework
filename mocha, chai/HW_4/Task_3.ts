export {}
const a = "Произвольная строка";
const b = (a.charAt(12));

if (b == "") {
    console.log("Вы вышли за границу строки");
} else {
    console.log("Вы в границах строки");
}