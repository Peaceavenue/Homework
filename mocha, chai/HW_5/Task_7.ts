export {};
let result = ((n: number) => {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum = sum * i;
    }
    return sum;
})(5)
console.log(result);