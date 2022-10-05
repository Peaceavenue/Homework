export {}
let b = 0;

function getSum (a: number) {
    for (let i=0; i<=a; i++) {
        b=b+i;
    };
    return b;
};
console.log(getSum(100));