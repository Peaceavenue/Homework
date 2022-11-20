export {};
let sum = 0;

function getSumNumbers (a: string) {
    let b = (a.split(""));
    for (let i = 0; i < b.length; i++) {
        sum = sum + Number(b[i])
    }
    return sum;
}
console.log(getSumNumbers("2021"));
