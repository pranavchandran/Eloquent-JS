// Strings and their properties

// let kim = Object;
// kim.age = 88;
// console.log(kim.age)

let kim = "Kim";
kim.age = 88;
// console.log(kim.age) undefined

console.log("coconuts".slice(4, 7))
console.log("coconuts".indexOf('u'))

/*
One difference is that a string’s indexOf can search for a string containing more 
than one character, whereas the corresponding array method looks only for a single element.
console.log("one two three".indexOf("ee"));
*/

console.log("one two three".indexOf("ee"))

/*
The trim method removes whitespace
(spaces, newlines, tabs, and similar characters) from the start and end of a string.
*/

console.log("   okay   \n".trim());

/*
The zeroPad function from the previous chapter also exists as a method.
It is called padStart and takes the desired length and padding character as arguments.
*/

console.log(String(6).padStart(3, "0"));
console.log(String('XXX').padStart(5, "0"));

/*
You can split a string on every occurrence of another string with split and 
join it again with join.
*/

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ")
console.log(words)

console.log(words.join("."))

/*
A string can be repeated with the repeat method, which creates a new string 
containing multiple copies of the original string, glued together.
*/

console.log("LA".repeat(3))

let string = "abc"
console.log(string.length);
console.log(string[1]);

/*
It can be useful for a function to accept any number of arguments. For example, Math.max 
computes the maximum of all the arguments it is given.
To write such a function, you put three dots before the function’s last parameter, like this:
*/

function max(...numbers){
    let result = -Infinity
    for (let number of numbers){
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
console.log(max(-4, -1, -9, -2));


function min(...numbers){
    let result = Infinity
    for (let number of numbers){
        if (number < result) result = number;
    }
    return result;
}
console.log(min(4, 1, 9, -2));
console.log(min(-4, -1, -9, -2));




// console.log(Infinity          ); /* Infinity */
// console.log(Infinity + 1      ); /* Infinity */
// console.log(Math.pow(10, 1000)); /* Infinity */
// console.log(Math.log(0)       ); /* -Infinity */
// console.log(1 / Infinity      ); /* 0 */
// console.log(1 / 0             ); /* Infinity */
// console.log(-Infinity)