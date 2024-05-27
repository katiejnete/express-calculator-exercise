class MathOps {
  constructor(numArr, op) {
    this.numArr = numArr;
    this.op = op;
  }
  mean() {
    let sum = 0;
    for (let num of this.numArr) {
      sum += num;
    }
    const mean = sum / this.numArr.length;
    return { operation: this.op, value: mean };
  }

  median() {
    let median;
    const nums = this.numArr.sort((a, b) => {
      return a - b;
    });
    const l = nums.length;
    if (l % 2 === 0) {
      median = (nums[l / 2] - nums[l / 2 - 1]) / 2;
    } else {
      median = nums[Math.floor(l / 2)];
    }
    return { operation: this.op, value: median };
  }

  mode() {
    const modeDict = {};
    let max = 0;
    let mode;
    // tbd will be evaluated at the end of function
    let tbd; 
    const modeSet = new Set();
    this.numArr.reduce(function (accum, next) {
      if (accum[next]) {
        accum[next]++;
      } else {
        accum[next] = 1;
      }
      return accum;
    }, modeDict);
    for (const [num, occurrences] of Object.entries(modeDict)) {
      if (occurrences > max && !modeSet.has(occurrences)) {
        modeSet.add(occurrences);
        max = occurrences;
        mode = num;
      } else if (modeSet.has(occurrences)) {
        tbd = occurrences;
      }
    }
    if (max === tbd) return { operation: this.op, value: "undefined" };
    return { operation: this.op, value: parseInt(mode) };
  }
}

module.exports = MathOps;
