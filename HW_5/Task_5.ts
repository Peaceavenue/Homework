export {};
function getSum (a: number, b: number) {
    let sum = 0;
    if (a === b) {
        return a || b;
    } else if (a > b) {
        for (b; b <= a; b++) {
            sum = sum + b;
        }
        return sum
    } ;

};

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));