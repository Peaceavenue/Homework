export {};
const peopleObj = {
  humanName: "John",
};

const peopleObj1 = {
  humanName: "Clarissa",
};

function getName(this: any) {
  console.log(`My name is ${this.humanName}`);
}

getName.apply(peopleObj);
getName.call(peopleObj1);
