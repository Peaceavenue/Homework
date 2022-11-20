export {};
let percent = 1.17;
let years = 5;

function creditSum(credit: number) {
    return (credit * percent - credit) * years;
}
console.log(creditSum(1000000));