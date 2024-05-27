const MathOps = require("../MathOps");

test("should return median", function () {
  const math = new MathOps([1, 2, 3], "median");
  expect(math.median()).toEqual({ operation: "median", value: 2 });
});

test("should return median with negative numbers", function () {
  const math = new MathOps([-1, -2, -3], "median");
  expect(math.median()).toEqual({ operation: "median", value: -2 });
});

test("should return median 2", function () {
  const math = new MathOps([3,13,2,34,11,26,47], "median");
  expect(math.median()).toEqual({ operation: "median", value: 13 });
});
