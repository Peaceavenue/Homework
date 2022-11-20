import { Calculator1 } from "./Calculator1";

describe("addition", () => {
    test("positive: checking the sum of addition of numbers", () => {
        expect(Calculator1.sum(8, 12)).toBe(20);
    });
    test("negative: checking the sum of addition of numbers", () => {
        expect(Calculator1.sum(6, 8)).not.toBe(15);
    });
});

describe("subtraction", () => {
    test("positive: number subtraction check", () => {
        expect(Calculator1.sub(20, 8)).toBe(12);
    });
    test("negative: number subtraction check", () => {
        expect(Calculator1.sub(30, 10)).not.toBe(15);
    });
});

describe("multiplication", () => {
    test("positive: checking the result of multiplying numbers", () => {
        expect(Calculator1.multi(12, 3)).toBe(36);
    });
    test("negative: checking the result of multiplying numbers", () => {
        expect(Calculator1.multi(30, 10)).not.toBe(3000);
    });
});

describe("division", () => {
    test("positive: checking the result of dividing numbers", () => {
        expect(Calculator1.div(12, 3)).toBe(4);
    });
    test("negative: checking the result of dividing numbers", () => {
        expect(Calculator1.div(30, 10)).not.toBe(2);
    });
});

describe("remainder of the division", () => {
    test("positive: checking the result of the remainder of a division", () => {
        expect(Calculator1.remain(10, 3)).toBe(1);
    });
    test("negative: checking the result of the remainder of a division", () => {
        expect(Calculator1.remain(23, 7)).not.toBe(3);
    });
});

describe("exponentiation", () => {
    test("positive: checking the result of raising numbers to a power", () => {
        expect(Calculator1.exp(10, 2)).toBe(100);
    });
    test("negative: checking the result of raising numbers to a power", () => {
        expect(Calculator1.exp(5, 3)).not.toBe(126);
    });
});