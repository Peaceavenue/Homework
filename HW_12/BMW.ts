import { Car_car } from "./Car_car";
class newCar extends Car_car {
  constructor(protected carName: string, protected carColor: string) {
    super(carName, carColor);
  }
}

function getColorInfo(carColor: string) {
  if (carColor !== "white") {
    throw new Error("The color of your car does not match");
  } else {
    console.log("It's a good color for the car");
  }
}

const BMW = new newCar("BMW", "blue");
getColorInfo("blue");
