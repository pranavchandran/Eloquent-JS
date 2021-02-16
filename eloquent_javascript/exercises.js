/*
Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/

function isEven(num) {
    if (num == 0)
      return true;
    if (num == 1)
      return false;
    if (num < 0)
      return "??";
    else return isEven(num - 2);
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??

/*
The previous chapter introduced the standard function Math.min that returns 
its smallest argument. We can do that ourselves now. Write a function min that 
takes two arguments and returns their minimum.
*/

var min = function(x, y) {
    return (x <= y) ? x : y;
};

//tests
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(4, 4));
// → 4

/*
#EXERCISE 3: Bean Counting
You can get the Nth character, or letter, from a string by writing "string".charAt(N), 
similar to how you get its length with "s".length. The returned value will be a string 
containing only one character (for example, "b"). The first character has position zero, 
which causes the last one to be found at position string.length - 1. In other words, a 
two-character string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase “B” characters are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a 
second argument that indicates the character that is to be counted (rather than counting
only uppercase "B" characters). Rewrite countBs to make use of this new function. */

var countBs = function(str) {
    return str.match(/B/g).length;
};

// var countChar = function(str, character) {
//     var matchExp = new RegExp(character, 'g');
//     return str.match(matchExp).length;
// };

//the old fashioned way
// var countChar2 = function(str, character) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === character)
//             count++;
//     }
//     return count;
// };

// tests
console.log('Function countBs',countBs('BBBC'));
// → 2
// console.log('function countChar',countChar('kakkerlak', 'k'));
// → 4
// console.log(countChar2('kakkekekkkkkkkekrlak', 'k'));