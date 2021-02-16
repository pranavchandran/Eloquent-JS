let total=0; count=1;
while(count<=10){
    total+=count;
    count+=1
}
console.log(total)

// console.log(sum(range(1, 10)));

console.log(null==undefined);
console.log(null==0);

console.log(null || 'user');
console.log('Agnes' || 'user');

console.log(-3 || -1);

/*Let’s look at another example. To remember the number of dollars
 that Luigi still owes you, you create a binding. And then when he 
 pays back $35, you give this binding a new value. */

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt)

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);

console.log(Math.min(2,4)+100);
console.log(Math.max(2,4)+100);

// upgrad1
// let theNumber = Number(("2"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " +
//               theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }

// upgrad2
let num = Number(("75"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// even numbers
let number = 0;
while (number<=12){
  console.log(number);
  number+=2
}

// 
let result = 1;
let counter = 0;
while (counter<10){
  result = result * 2;
  counter += 1;
}
console.log(result, counter)

// do {
//   yourName = document.getElementById("fname").value;
// }
// while (yourName);
// console.log(yourName);
// prompt(yourName);
function click(){
  alert('Hello')
  // let yourName = document.getElementById("fname").value;
  // console.log(yourName)
}

function myFunction(event) {
  let yourName = document.getElementById("fname").value;
  alert(yourName)
  event.preventdefault()
}

if(false!=true){
  console.log("That make sense");
  if(1<2){
    console.log("No surprise there");
  }
}

// counter
for (let number=0; number<=12; number+=2){
  console.log(number);
};

let result1 = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result1 = result1 * 2;
}
console.log(result);

// break condition
for (let current = 20; ;current += 1){
  if (current % 7 == 0){
    console.log('Breaking the loop', current);
    break;
  }
}

// switch(prompt('What is the weather like?')){
//   case "rainy":
//     alert("Remember to bring an umbrella");
//     break;
//   case "sunny":
//     alert("Go outside.");
//     break;
//   case "cloudy":
//     alert("Go Outside");
//     break;
//   default:
//     alert("Unknown weather type!");
//     break;
// }
// interview questions
// Making stars
/*
#
##
###
####
#####
######
#######
insphere
*/
let resulta = '#'; 
for (let i = 0; i<7; i+=1){
  console.log(resulta)
  resulta+="#"
}

for (let i = 0; i<100+1; i+=1){
  // console.log(i);
  // if(i%3==0){
  //   console.log("Fizz");
  // }
  // if(i%5==0 && i%3!=0){
  //   console.log('Buzz');
  // }
  if(i%5==0 && i%3==0){
    console.log(i,'FizzBuzz');
  }
  else if(i%3==0){
    console.log(i,'fizz')
  }
  else if(i%5==0){
    console.log(i,'buzz')
  }
}
// Mkaing chess board
var board = "";
var evenRow = "# # # # ";
var oddRow = " # # # #";

for ( var i = 0; i < 8; i++ ) {

    if ( i%2 == 0 ) board += evenRow + '\n';
    else board += oddRow + '\n';
}

console.log(board);