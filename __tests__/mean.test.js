const MathOps = require("../MathOps");

test("should return mean", function () {
  const math = new MathOps([1, 2, 3],"mean");
  expect(math.mean()).toEqual({"operation": "mean", "value": 2});
});

test("should return mean with negative numbers", function () {
  const math = new MathOps([-1, -2, -3],"mean");
  expect(math.mean()).toEqual({"operation": "mean", "value": -2});
});

test("should return mean 2", function () {
  const math = new MathOps([8, 9, 5, 7],"mean");
  expect(math.mean()).toEqual({"operation": "mean", "value": 7.25});
});