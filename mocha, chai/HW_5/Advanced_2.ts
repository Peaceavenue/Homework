export {};
function isTriangle (a: number, b: number, c: number) {
    if ((a + b >= c && Number.isInteger(a)) && (b + c >= a && Number.isInteger(b)) && (c + a >= b && Number.isInteger(c))) {
        return "true";
    } else {
        return "false";
    }
};

console.log(isTriangle(3.5,5,7));