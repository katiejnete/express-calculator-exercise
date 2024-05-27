const MathOps = require("../MathOps");

test("should return mode", function () {
  const math = new MathOps([1, 2, 3], "mode");
  expect(math.mode()).toEqual({ operation: "mode", value: "undefined" });
});

test("should return mode with negative numbers", function () {
  const math = new MathOps([-1, -2, -3, -1], "mode");
  expect(math.mode()).toEqual({ operation: "mode", value: -1 });
});

test("should return mode 2", function () {
  const math = new MathOps([1,1,3,5,6,6,7,7,7,8], "mode");
  expect(math.mode()).toEqual({ operation: "mode", value: 7 });
});

test("should return mode 3", function () {
  const math = new MathOps([1,1,2,2], "mode");
  expect(math.mode()).toEqual({ operation: "mode", value: "undefined" });
});
