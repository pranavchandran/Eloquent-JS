console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 2020"))
/*So you could match a date and time format like 01-30-2003 15:20 with the following expression:*/
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime.test("30-jan-2003 15:20"))
/*
 * To invert a set of characters—that is, to express that you want to match any character except the ones in the set—you can write a caret (^) character after the opening bracket.
 * */
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"))
console.log(notBinary.test("1100100010200110"));
/*
 * When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once. Thus, /\d+/ matches one or more digit characters.
 */
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

/*
 * A question mark makes a part of a pattern optional, meaning it may occur zero times or one time. In the following example, the u character is allowed to occur, but the pattern also matches when it is missing.
*/
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"))
console.log(neighbor.test("neighbor"))
console.log(neighbor.test("neighor"))

/*
 * Here is another version of the date and time pattern that allows both single- and double-digit days, months, and hours. It is also slightly easier to decipher.
 */
let datetime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(datetime.test("1-30-2003 8:45"))
/*
 * Grouping subexpressions
 */
let cartooncrying=/boo+(hoo+)+/i;
console.log(cartooncrying.test("boohoohoo"))
console.log(cartooncrying.test("boohoolol"))
console.log(cartooncrying.test("booHoo"))
console.log(cartooncrying.test("booMoohoo"))
/*
 * Matches and groups
 */
let match = /\d+/.exec("one two th100")
console.log(match)

/*
 * String values have a match method that behaves similarly.
 */
console.log("one two 100".match(/\d+/));

let quotedtext = /'([^']*)'/;
console.log(quotedtext.exec("she said 'hello'"));
console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("1234"));

console.log(new Date());

