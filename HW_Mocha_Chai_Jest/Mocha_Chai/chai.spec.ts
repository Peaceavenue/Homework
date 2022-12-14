import { Calculator } from "./Calculator";
import { expect } from "chai";

// помню, что не рекомендуется юзать .to.not.eq, решила пробнуть раз поддерживается

describe("addition", () => {
  it("positive: checking the sum of addition of numbers", () => {
    expect(
      Calculator.sum(8, 12),
      "Your result of adding a number is not equal to 20"
    ).to.eq(20);
  });
  it("negative: checking the sum of addition of numbers", () => {
    expect(
      Calculator.sum(6, 8),
      "Your result of adding a number is 14. The system works correctly"
    ).to.not.eq(15);
  });
});

describe("subtraction", () => {
  it("positive: number subtraction check", () => {
    expect(
      Calculator.sub(20, 8),
      "Your number subtraction result is not 12"
    ).to.eq(12);
  });
  it("negative: number subtraction check", () => {
    expect(
      Calculator.sub(30, 10),
      "Your number subtraction result is 20. The system works correctly"
    ).to.not.eq(15);
  });
});

describe("multiplication", () => {
  it("positive: checking the result of multiplying numbers", () => {
    expect(
      Calculator.multi(12, 3),
      "Your number multiplication result is not equal to 36"
    ).to.eq(36);
  });
  it("negative: checking the result of multiplying numbers", () => {
    expect(
      Calculator.multi(30, 10),
      "Your number multiplication result is 300. The system works correctly"
    ).to.not.eq(3000);
  });
});

describe("division", () => {
  it("positive: checking the result of dividing numbers", () => {
    expect(
      Calculator.div(12, 3),
      "Your number division result is not equal to 4"
    ).to.eq(4);
  });
  it("negative: checking the result of dividing numbers", () => {
    expect(
      Calculator.div(30, 10),
      "Your number division result is 3. The system works correctly"
    ).to.not.eq(2);
  });
});

describe("remainder of the division", () => {
  it("positive: checking the result of the remainder of a division", () => {
    expect(Calculator.remain(10, 3), "Your remainder result is not 1").to.eq(1);
  });
  it("negative: checking the result of the remainder of a division", () => {
    expect(
      Calculator.remain(23, 7),
      "Your remainder result is 2. The system works correctly"
    ).to.not.eq(3);
  });
});

describe("exponentiation", () => {
  it("positive: checking the result of raising numbers to a power", () => {
    expect(
      Calculator.exp(10, 2),
      "Your exponentiation result is not equal to 100"
    ).to.eq(100);
  });
  it("negative: checking the result of raising numbers to a power", () => {
    expect(
      Calculator.exp(5, 3),
      "Your exponentiation result is 125. The system works correctly"
    ).to.not.eq(124);
  });
});
