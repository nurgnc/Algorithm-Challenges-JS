/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!

If you like this Kata, please try:

Sum of prime-indexed elements ( https://www.codewars.com/kata/59f38b033640ce9fc700015b )

Sum of integer combinations (https://www.codewars.com/kata/59f3178e3640cef6d90000d5)
*/

// my solution
function repeats(arr){
//..
};

// sample test
describe("Basic tests", function(){
Test.assertEquals(repeats([4,5,7,5,4,8]),15);
Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);
});
