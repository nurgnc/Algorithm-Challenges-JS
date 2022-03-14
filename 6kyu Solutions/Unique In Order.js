// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// my solution
var uniqueInOrder=function(iterable){
  if(typeof iterable === 'string') {
    let iterableStr = [];
    for(i = 0; i < iterable.length; i++) {
      if(iterable[i] !== iterable[i+1]){
        iterableStr.push(iterable[i])
      }
    }
    return iterableStr;
  } else {
    return [...new Set(iterable)];  
  }
}

// sample test
describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});
