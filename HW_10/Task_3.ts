export {};
const car1 = {
  numberOfDoors: 2,
  handlebarSide: "left",
};

const car2 = {
  numberOfDoors: 4,
  handlebarSide: "right",
};

function getCarInfo(this: any) {
  console.log(`This car has ${this.numberOfDoors} doors and this is ${this.handlebarSide} drive car`);
}

getCarInfo.apply(car1);
getCarInfo.call(car2);
