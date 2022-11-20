class Animal {
  static animalType = "mammal";

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  descriptionAnimal() {
    return `This is a ${Animal.animalType}. It's name is ${this.name}`;
  }
}

const herbivore = new Animal("rabbit");
console.log(herbivore.descriptionAnimal());
