const express = require("express");
const MathOps = require("./MathOps");
const ExpressError = require("./expressError");

const app = express();

function validateInput(numStr) {
  if (!numStr) return null;
  const strArr = numStr.split(",");
  const numArr = strArr.map(function (str) {
    return parseInt(str);
  });
  if (numArr.includes(NaN)) return NaN;
  return numArr;
}

app.get("/mean", (req, res, next) => {
  try {
    const numArr = validateInput(req.query["nums"]);
    if (numArr === NaN) {
      throw new ExpressError(`${req.query["nums"]} includes not a number`, 400);
    } else if (numArr === null) {
      throw new ExpressError("Numbers are required", 400);
    }
    const math = new MathOps(numArr, "mean");
    const mean = math.mean();
    return res.json({ response: mean });
  } catch (err) {
    return next(err);
  }
});

app.get("/median", (req, res, next) => {
  try {
    const numArr = validateInput(req.query["nums"]);
    if (numArr === NaN) {
      throw new ExpressError(`${req.query["nums"]} includes not a number`, 400);
    } else if (numArr === null) {
      throw new ExpressError("Numbers are required", 400);
    }
    const math = new MathOps(numArr, "median");
    const median = math.median();
    return res.json({ response: median });
  } catch (err) {
    return next(err);
  }
});

app.get("/mode", (req, res, next) => {
  try {
    const numArr = validateInput(req.query["nums"]);
    if (numArr === NaN) {
      throw new ExpressError(`${req.query["nums"]} includes not a number`, 400);
    } else if (numArr === null) {
      throw new ExpressError("Numbers are required", 400);
    }
    const math = new MathOps(numArr, "mode");
    const mode = math.mode();
    return res.json({ response: mode });
  } catch (err) {
    return next(err);
  }
});

app.use(function (err, req, res, next) {
  let message = err.message;
  let status = err.status || 500;
  return res.status(status).json({ error: { message, status } });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
