const calculator = require("../models/calculator");

test("The sum of 2 + 2 should return 4", () => {
  const result = calculator.sum(2, 2);
  expect(result).toBe(4);
});

test("The sum of 5 + 100 should return 105", () => {
  const result = calculator.sum(5, 100);
  expect(result).toBe(105);
});

test("The sum of 'banana' + 100 or 100 + 'banana' should return 'Error'", () => {
  const result1 = calculator.sum("banana", 100);
  expect(result1).toBe("Error");
  const result2 = calculator.sum(100, "banana");
  expect(result2).toBe("Error");
});

test("The sum of 'apple' + 'banana' should return 'Error'", () => {
  const result = calculator.sum("apple", "banana");
  expect(result).toBe("Error");
});

test("The sum of '1' + '3' should return 'Error'", () => {
  const result = calculator.sum("1", "3");
  expect(result).toBe("Error");
});

test("The sum of null + 100 or 100 + null should return 'Error'", () => {
  const result1 = calculator.sum(null, 100);
  expect(result1).toBe("Error");
  const result2 = calculator.sum(100, null);
  expect(result2).toBe("Error");
});
