/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

// my solution
function cubeOdd(arr) {

  let sum = 0;
  if(!arr.every(item => typeof item === 'number')) {
      return undefined;
  }
  arr.forEach((item) => {
    item = Math.pow((item), 3);
    if(item % 2 === 1 || item % 2 === -1) {
      sum += item;
    }
  })
  return sum;
  }

// sample test
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);
  });
});
