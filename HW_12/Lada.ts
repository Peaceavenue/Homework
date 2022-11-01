import { Car_car } from "./Car_car";
import fs from "fs";

class thisIsNewCar extends Car_car {
  constructor(protected carName: string, protected carColor: string) {
    super(carName, carColor);
  }
}

function getColorInfo(carColor: string) {
  if (carColor !== "blue") {
    throw new Error("The color of your car does not match");
  } else {
    console.log("It's a good color for the car");
  }
}

const Lada = new thisIsNewCar("Lada", "blue");
getColorInfo("blue");

fs.writeFile("Kamaz.ts", "Now you have a Kamaz!", (err) => {
  if (err) throw "You were left without Kamaz";
  console.log("Now you have a killer machine!");
});

setTimeout(() => {
  fs.readFile("Kamaz.ts", "utf-8", (err, content) => {
    console.log(content);
  });
}, 3000);

setTimeout(() => {
  fs.unlink("Kamaz.ts", (err) => {
    if (err) throw "This car is yours forever";
    console.log("You no longer have a Kamaz killer car");
  });
}, 6000);
