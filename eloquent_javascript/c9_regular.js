/*
Regular Expressions
Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ 
Now they have two problems.

Jamie Zawinski
Yuan-Ma said, ‘When you cut against the grain of the wood, much strength is needed. When you program 
against the grain of the problem, much code is needed.’

Master Yuan-Ma, The Book of Programming
*/
let re1 = new RegExp("abc");
let re2 = /abc/;
let eighteenPlus = /eighteen\+/;

// Testing for matches
console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

console.log(new Date());
// you can also create an obj for specific time
console.log(new Date(2009,11,9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

console.log(new Date(2013,11,19).getTime());
console.log(new Date(1387407600000))

/*
Putting parentheses around the parts of the expression that we are interested in, 
we can now create a date object from a string.
*/
function getDate(string){
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}
console.log('Function getDate ',getDate("1-30-2003"));

// Word and string boundaries
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("cat"));

console.log(/$cat/.test("concatecat"));

let animalcount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalcount.test('15 pigs'));
console.log(animalcount.test('15 cows'));
console.log(animalcount.test('15 cowos'));
console.log(animalcount.test('15 Dragons'));

// String values have a replace method that can be used to replace part of the string with another string.
console.log("papa".replace("p", "m"));
console.log("Borobudur".replace(/[ou]/, "a"));

/*
When a g option (for global) is added to the regular expression,
all matches in the string will be replaced, not just the first.
*/
console.log("Borobudur".replace(/[ou]/g, "a"));
/*
 For example, say we have a big string containing the names of people, one name per line, 
 in the format Lastname, Firstname. 
 If we want to swap these names and remove the comma to get a 
 Firstname Lastname format, we can use the following code:
*/
console.log("Liskov, Barbarra\nMccarthy, John\nwadler, philip".replace(/(\w+), (\w+)/g, "$2 $1"));

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
            str => str.toUpperCase()));

// another example
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  console.log(amount);
  if (amount == 1) { // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
// console.log(stock.replace(/(\d+) (\w+)/g,minusOne));

/*
The (\d+) group ends up as the amount argument to the function, and the (\w+) group gets bound 
to unit. The function converts amount 
to a number—which always works since it matched \d+—and makes some adjustments in case there 
is only one or zero left.
*/
let my_values = "0 egg, 2 chickens, and 3 milk shake"
function addone(match, amount, unit){
    amount = Number(amount) + 1;
    if (amount==1){
        unit = unit + "s"
    }else if(amount == 0){
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(my_values.replace(/(\d+) (\w+)/g,addone));

/*
It is possible to use replace to write a function that removes all 
comments from a piece of JavaScript code. Here is a first attempt:
*/

// function stripComments(code) {
//     return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
//   }
// console.log(stripComments("1 + /* 2 */3"));
// console.log(stripComments("x = 10;// ten!"));
// console.log(stripComments("1 /* a */+/* b */ 1"));

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
  }
  console.log(stripComments("1 /* a */+/* b */ 1"));

let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b","gi");
console.log(text.replace(regexp, "_$1_"));

let name1 = "dea+hl[]rd";
let text1 = "This dea+hl[]rd guy is super annoying."
let escaped = name1.replace(/[\\[.+*?(){|^$]/g, "\\$&")
console.log(escaped)
let regexp1 = new RegExp("\\b" + escaped + "\\b", "gi")
console.log(text1.replace(regexp1, "_$&_"))

/*
The search method
The indexOf method on strings cannot be called with a regular expression. But there is another method, 
search, that does 
expect a regular expression. Like indexOf, it returns the first index on which the expression was 
found, or -1 when it wasn’t found.
*/

console.log("  pranav".search(/\S/))
console.log(" ".search(/\S/))

var str = "Th e best things in life are free";
var patt = new RegExp("e");
var res = patt.exec(str);
console.log(res)

let pattern = /y/g;
pattern.lastIndex = 2;
let match = pattern.exec('xyzziy')
console.log(match.index)
console.log(pattern.lastIndex)

let global = /abc/g
console.log(global.exec("xyz abc"))
console.log("xyz abc".slice(4,))

let sticky = /abc/y
console.log(sticky.exec("abc xyz"))

let digit = /\b\d+\b/g;
console.log('asdasd',digit.exec("here it is 1?"))

let digit1 = /\d/g;
console.log(digit1.exec("here it is: 1"));
console.log(digit1.exec("and now: 1"));

console.log("Banan".match(/an/g));

let input = "A string with 3 numbers in it....42 and 88."
let number = /\b\d+\b/g
let match01;
while (match01 = number.exec(input)){
  console.log("Found", match01[0], "at", match01.index);
}
console.log(number.exec(input))

// Parsing an INI file
function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach(line => {
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  });
  return result;
}
console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));


let a = [1,2,3,4]
a.forEach((a)=>{
  if(a%2==0){
    console.log(a)
  }
})

a = '*&%tu*&lo'


var even = [1,2,3,4,5,6];
select = even.filter(p=> {
    if (p%2==0){
        return {selected:p}
    }
});
console.log(select)

var str = "Їжак::: résd,$%& adùf"

oi = str.replace(/\s|[0-9_]|\W|[#$%^&*()]/g,"");
console.log(oi)

console.log(/🍎{3}/.test("🍎🍎🍎"));
// → false
console.log(/<.>/.test("<🌹>"));
// → false
console.log(/<.>/u.test("<🌹>"));
// → true

console.log(/\p{Script=Greek}/u.test("α"));
console.log(/\p{Script=Arabic}/u.test("α"));
console.log(/\p{Alphabetic}/u.test("α"));
console.log(/\p{Alphabetic}/u.test("!"));
