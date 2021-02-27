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

/*
Arrays have a reverse method that changes the array by inverting the order in 
which its elements appear. For this exercise, write two functions, reverseArray 
and reverseArrayInPlace. The first, reverseArray, takes an array as argument and 
produces a new array that has the same elements in the inverse order. The second, 
reverseArrayInPlace, does what the reverse method does: 
it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method.*/

// reversed array
function reversearray(array){
  var reversedArray = [];
  while (i=array.pop()){
    reversedArray.push(i);
  }
  return reversedArray
}
// console.log(reversearray(['A', 'B', 'C']));
function reversearrayinplace(array){
  for (var i = 0; i < Math.floor(array.length/2); i++){
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

var array1 = [1,2,3,4,5];
reversearrayinplace(array1);
console.log(array1)

/*
The resulting objects form a chain, like this:
A linked list
A nice thing about lists is that they can share parts of their structure. For example, if I create 
two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding 
defined earlier), they are both independent lists, but they share the structure that makes up their 
last three elements. The original list is also still a valid three-element list.
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] 
as argument. Also write a listToArray function that produces an array from a list. Then add a helper 
function prepend, which takes an element and a list and creates a new list that adds the element to the 
front of the input list, and nth, which takes a list and a number and returns the element at the given 
position in the list (with zero referring to the first element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(array){
  let result = [];
  if (Array.isArray(array)){
    let currListItem = result;
    for (let item of array){
      let newListItem = {
        value: item,
        rest: null
      };
      if (typeof currListItem.rest == 'undefined'){
        result = newListItem;
      }else{
        currListItem.rest = newListItem;
      }
      currListItem = newListItem;
    }
  }
  return result;
}

// console.log(arrayToList([10, 20]));
// console.log(arrayToList([10, 20]).hasOwnProperty('rest1'));
function listToArray(list){
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest == undefined){
    // return result;
    // i change to list for nth function
    return list; 
  }
  else{
    result.push(list.value);
    while (list.hasOwnProperty('rest') && list.rest !== null){
      list = list.rest;
      // console.log('is it removed', list)
      if (list.hasOwnProperty('value')){
        result.push(list.value);
      }
    }
  }
  return result;
}
// test1
// console.log(listToArray());
// console.log(listToArray(arrayToList([10, 20, 30])));
function prepend(element, list){
  return {
    value: element,
    rest: list
  };
}

// prepend test1
// console.log(prepend(1, [1,2,3]))
// console.log(prepend(1, prepend(20, null)))

function nth(list, number){
  return listToArray(list)[number];
}

// nth test1 and 2
// console.log(nth([1,2,3,4], 2));
// console.log(nth(arrayToList([10,20,30]), 1));

function nthRecursive(list, number){
  if (number===0){
    return list.value;
  } else if (list.rest === null){
    return undefined;
  } else {
    return nthRecursive(list.rest, number-1);
  }
}

// nthRecursive test1
// console.log(nthRecursive(arrayToList([10, 20, 30, 40]), 0));
// console.log(nthRecursive(arrayToList([10, 20, 30]), 3));
// console.log(nthRecursive(arrayToList([10, 20, 30]), -2));

/*
4.4 Deep Comparison
The == operator compares objects by identity. But sometimes, you would prefer to compare the values of 
their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same 
value or are objects with the same properties whose values are also equal when compared with a 
recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by 
looking at their properties, you can use the typeof operator. If it produces "object" for 
both values, you should do a deep comparison. But you have to take one silly exception 
into account: by a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of 
objects to compare them one by one.
*/

function deepEqual(a, b){
  if (a == b){
    // items are identical
    return true;
  }else if (typeof a==='object' && a!==null && typeof b==='object' && b!=null){
    // items are objects -do a deep property value compare
    // join keys from both objects together in one array
    let keys = Object.keys(a).concat(Object.keys(b));
    console.log(keys);
    // filter out duplicate keys
    keys = keys.filter(
      function (value, index, self){
        return self.indexOf(value) === index;
      }
    );
    for (p of keys){
      if (typeof a[p] === 'object' && typeof b[p] === 'object'){
        if (deepEqual(a[p], b[p]) === false){
          return false;
        }

      }else if (a[p] != b[p]){
        return false;
      }
    }
    return true;
  }else{
    return false;
  }
}

let obj = {here: {is: "an"}, object: 2}
// console.log(deepEqual(obj, obj))
// console.log(deepEqual(obj, {here:1, object:2}));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

// Exercises in higher order functions
function loop(start, test, update, body){
  for(let value=start; test(value); value=update(value)){
      body(value);
  }
  console.log('Function loop Ended')
}
loop(3, n=> n > 0, n=> n - 1, console.log)

// exercise 5:3 Everything
function every(array, predicate){
  for (let element of array){
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate){
  return !array.some(element => !predicate(element));
}

console.log(every([1,3,5], n=> n < 10));
console.log(every([1,3,5], n=> n > 10));

// exercise 5:4 Dominant writing direction
function dominant_direction(text) {
  let counted = countby(text, char=> {
    let script = CharachterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name})=> name!="none");
  if (counted.length == 0) return "ltr";
  return counted.reduce((a,b)=>a.count>b.count ? a:b).name;
}

/*
Flattening
Use the reduce method in combination with the concat method to “flatten” an array of arrays 
into a single array that has all the elements of the original arrays.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((array1, array2)=> array1.concat(array2)));

/*
Write a higher-order function loop that provides something like a for
loop statement. It takes a value, a test function, an update function,
and a body function. Each iteration, it first runs the test function on
the current loop value and stops if that returns false. Then it calls the
body function, giving it the current value. Finally,
it calls the update function to create a new value and starts from the
beginning.
 */

function loop(value, test, update, body) {
  for (let i = value; test(i); i=update(i)) {
    body(i)
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

/*
Everything
Analogous to the some method, arrays also have an every method. 
This one returns true when the given function returns true for 
every element in the array. In a way, some is a version of the
|| operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate
function as parameters. Write two versions, one using a loop and 
one using the some method.
*/

function every(array, test) {
  for (let element of array){
    if (test(element) == false){
      return false;
    }
  }
  return true;
}

console.log(every([1,2,3,4,5,6], n => n < 10));
console.log(every([1,2,3,4,5,6], n => n > 10));

/*
Dominant writing direction
Write a function that computes the dominant writing direction in a string
of text. Remember that each script object has a direction property 
that can be "ltr" (left to right), "rtl" (right to left), or "ttb" 
(top to bottom).
The dominant direction is the direction of a majority of the characters
that have a script associated with them. The characterScript and countBy
functions defined earlier in the chapter are probably useful here.
*/

// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => code >= from &&
//                                            code < to)) {
//       return script;
//     }
//   }
//   return null;
// }

// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({name, count: 1});
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }

// function dominantDirection(text) {
//   let scripts = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none";
//   }).filter(({name}) => name != "none");
//   switch (scripts.length) {
//     case 0:
//       return 'no dominant direction found';
//     case 1:
//       return scripts[0].name;
//     default:
//       if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
//         return 'no dominant direction found';
//       } else {
//         return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
//       }
//   }
// }


// console.log(dominantDirection("Hello!"));

/*
A vector type
Write a class Vec that represents a vector in two-dimensional space. It takes 
x and y parameters (numbers), which it should save to properties of the same 
name.
Give the Vec prototype two methods, plus and minus, that take another vector
as a parameter and return a new vector that has the sum or difference of the
two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the 
vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

function Vector(x,y){
  this.x = x;
  this.y = y;
  // let listo = [this.x,this.y];
  // return listo
}
Vector.prototype.plus = function(vector){
  return new Vector(this.x + vector.x, this.y + vector.y);
};
Vector.prototype.minus = function(vector){
  return new Vector(this.y - vector.x, this.y - vector.y);
};
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
});
Object.defineProperty(Vector.prototype, "name", {
  get: function(){
    return this.x + "My name is Pranav" + this.y;
  }
})
// v = Vector(2,3);
// console.log(v)
console.log(new Vector(1,2))
console.log(new Vector(1,2).plus(new Vector(2,3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3,4).length);
console.log(new Vector(3,4).name);

/*
Groups
The standard JavaScript environment provides another data structure called Set.
Like an instance of Map, a set holds a collection of values. Unlike Map, it does
not associate other values with those—it just tracks which values are part of the
set. A value can be part of a set only once—adding it again doesn’t 
have any effect.
Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds a value
to the group (but only if it isn’t already a member), delete removes its argument
from the group (if it was a member), and has returns a Boolean value indicating
whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine 
whether two values are the same.

Give the class a static from method that takes an iterable object as argument 
and creates a group that contains all the values produced by iterating over it.
*/

class Group{
  constructor(){
    this.members = [];
  }
  add(value){
    if(!this.has(value)){
      this.members.push(value);
    }
  }
  delete(value){
    this.members = this.members.filter(v => v!==value);
  }
  has(value){
    return this.members.includes(value);
  }
  static from(collection){
    let group = new Group;
    for (let value of collection){
      group.add(value);
    }
    return group;
  }
}
let group = Group.from([10,20]);
console.log(group.has(10))
console.log(group.has(30))
group.add(30)
console.log(group)
group.delete(30)
console.log(group)
