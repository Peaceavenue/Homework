export {};
function spendWages(phonePrice: number, accessoryPrice: number, tax: number, money: number) {
    let percentPrice = (phonePrice + accessoryPrice) * tax - (phonePrice + accessoryPrice);
    let purchase = (phonePrice + accessoryPrice + percentPrice);
    while (purchase <= money) {
        money = money - purchase;
        console.log ("Ваша покупка : " + purchase.toFixed(2) + ". Остаток на Вашей карте : " + money.toFixed(2));
    };
};
spendWages(2000, 500, 1.18, 10000);

//или

let purchaseAmount;
let percentPrice;
let phonePrice = 2000;
let accessoryPrice = 500;
let tax1 = 1.18
let money = 10000;

function percentSum (phonePrice: number, accessoryPrice: number, tax1: number) {
    percentPrice = (phonePrice + accessoryPrice) * tax1 - (phonePrice + accessoryPrice);
    purchase(percentPrice);

};
percentSum(phonePrice, accessoryPrice, tax1);

function purchase (percentPrice: number) {
    purchaseAmount = phonePrice + accessoryPrice + percentPrice;
    spendWages1(purchaseAmount);
};

function spendWages1 (purchaseAmount: number)  {
    while ( purchaseAmount <= money) {
        money = money - purchaseAmount;
        console.log("Ваша покупка : " + purchaseAmount.toFixed(2) + ". Остаток на Вашей карте : " + money.toFixed(2));
    };
};