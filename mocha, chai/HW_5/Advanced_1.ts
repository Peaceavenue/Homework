export {};
function chocolate(n: number, m: number) {
    let break1;
    if ((Number.isInteger(n)) && (Number.isInteger(m))) {
        break1 = n * m -1;
        return break1;
    } else {
        return 0;
    }
}
console.log(chocolate(1.0, 2));