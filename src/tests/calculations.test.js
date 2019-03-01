import { add, subtract, multiply, divide } from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 3 and 2 and return 1", () => {
    expect(subtract(5, 4)).toBe(1);
  });
});

describe("multiple", () => {
  it("should multiplty 2 and 6 and return 12", () => {
    expect(multiply(4, 5)).toBe(20);
  });
});

describe("divide", () => {
  it("should divide 20 and 5 and return 4", () => {
    expect(divide(100, 4)).toBe(25);
  });
});
