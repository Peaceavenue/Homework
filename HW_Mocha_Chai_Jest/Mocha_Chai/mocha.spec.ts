import assert from "assert";
import { Calculator } from "./Calculator";

describe("addition", function () {
  it("positive: checking the sum of addition of numbers", function () {
    assert.equal(
      Calculator.sum(8, 12),
      20,
      "Your result of adding a number is not equal to 20"
    );
  });
  it("negative: checking the sum of addition of numbers", function () {
    assert.notEqual(
      Calculator.sum(6, 8),
      15,
      "Your result of adding a number is 14. The system works correctly"
    );
  });
});

describe("subtraction", function () {
  it("positive: number subtraction check", function () {
    assert.equal(
      Calculator.sub(20, 8),
      12,
      "Your number subtraction result is not 12"
    );
  });
  it("negative: number subtraction check", function () {
    assert.notEqual(
      Calculator.sub(30, 10),
      15,
      "Your number subtraction result is 20. The system works correctly"
    );
  });
});

describe("multiplication", function () {
  it("positive: checking the result of multiplying numbers", function () {
    assert.equal(
      Calculator.multi(12, 3),
      36,
      "Your number multiplication result is not equal to 36"
    );
  });
  it("negative: checking the result of multiplying numbers", function () {
    assert.notEqual(
      Calculator.multi(30, 10),
      3000,
      "Your number multiplication result is 300. The system works correctly"
    );
  });
});

describe("division", function () {
  it("positive: checking the result of dividing numbers", function () {
    assert.equal(
      Calculator.div(12, 3),
      4,
      "Your number division result is not equal to 4"
    );
  });
  it("negative: checking the result of dividing numbers", function () {
    assert.notEqual(
      Calculator.div(30, 10),
      2,
      "Your number division result is 3. The system works correctly"
    );
  });
});

describe("remainder of the division", function () {
  it("positive: checking the result of the remainder of a division", function () {
    assert.equal(Calculator.remain(10, 3), 1, "Your remainder result is not 1");
  });
  it("negative: checking the result of the remainder of a division", function () {
    assert.notEqual(
      Calculator.remain(23, 7),
      3,
      "Your remainder result is 2. The system works correctly"
    );
  });
});

describe("exponentiation", function () {
  it("positive: checking the result of raising numbers to a power", function () {
    assert.equal(
      Calculator.exp(10, 2),
      100,
      "Your exponentiation result is not equal to 100"
    );
  });
  it("negative: checking the result of raising numbers to a power", function () {
    assert.notEqual(
      Calculator.exp(5, 3),
      124,
      "Your exponentiation result is 125. The system works correctly"
    );
  });
});
