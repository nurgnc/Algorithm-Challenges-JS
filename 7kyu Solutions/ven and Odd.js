/*
Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

input	NE	NO
126453	264	153
3012	2	31
4628	4628	0
0 is considered as an even number.

In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.
*/

// my solution
function evenAndOdd(num) {
  let newNum = num.toString().split("");
  let oddNumbers = [];
  let evenNumbers = [];
  newNum.map((item) => {
    let newItem = parseInt(item);
    newItem % 2 === 1 ? oddNumbers.push(newItem) : evenNumbers.push(newItem);
  });
  return [Number(evenNumbers.join("")), Number(oddNumbers.join(""))];
}

// sample test
const { assert } = require("chai");

describe("Fixed tests", function () {
  it("Examples", function () {
    assert.deepEqual(evenAndOdd(126453), [264, 153], `For input 126453`);
    assert.deepEqual(evenAndOdd(3012), [2, 31], `For input 3012`);
    assert.deepEqual(evenAndOdd(4628), [4628, 0], `For input 4628`);
  });
});
