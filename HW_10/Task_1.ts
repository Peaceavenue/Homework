export {};
class Car {
  constructor(protected carName: string, protected engineType: string) {}
}

class SportCar extends Car {
  constructor(
    protected carName: string,
    protected engineType: string,
    private maxSpeed: string,
    private carCost: number,
  ) {
    super(carName, engineType);
  }
  getCarInfo() {
    return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`;
  }
}

class LuxuryCar extends Car {
  constructor(
    protected carName: string,
    protected engineType: string,
    private maxSpeed: string,
    private carCost: number,
  ) {
    super(carName, engineType);
  }
  getCarInfo() {
    return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`;
  }
}
const Car1 = new SportCar("BMW", "diesel", "450 km/h", 10000000);
console.log(Car1.getCarInfo());
const Car2 = new LuxuryCar("Rolls-Royce", "petrol", "350 km/h", 50000000);
console.log(Car2.getCarInfo());
