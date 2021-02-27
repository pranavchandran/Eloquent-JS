// Higher order functions
let total=0, count=1;
while(count<10){
    total += count;
    count+=1;
}
console.log(total)

let totalsum = function(total, count){
    while(count<10){
        total += count;
        count+=1;
    }
    return total;
}

console.log('My Function', totalsum(0, 0));

// we can write these methods in 2 types
let sum = function(array){
    var total = 0;
    for(var x in array){
        total += array[x];
    }
    return total;
}

let totalsum1 = function(array){
    var total = 0;
    for(var x of array){
        total += x;
    }
    return total;
}

// The second relies on two external functions and is one line long.
console.log('function_name sum: ', sum([1,2,3,4,5]))
console.log('function_name totalsum1: ', totalsum1([1,2,3,4,5]))

// Abstracting repetition
/*
Can we abstract “doing something N times” as a function? Well, 
it’s easy to write a function that calls console.log N times.
*/
function repeatLog(n){
    for (let i=0; i<n; i++){
        console.log(i);
    }
}

repeatLog(4)

/*
But what if we want to do something other than logging the numbers?
Since “doing something” can be represented as a 
function and functions are just values, we can pass 
our action as a function value.
*/

function action(n){
    let total = 0;
    for (let i=0; i<n; i++){
        // console.log(i)
        total += i;
    }
    return total;
}


function repeat(n){
    total = 0;
    for (let i=0; i<n; i++){
        total += (action(i));
    };
    return total;
};

// console.log(repeat(10))
// console.log(action(10))

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
}

// let labels = [];
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`);
// });
// console.log(labels)

let years = [];
repeat(2020, i => {
    years.push(`Year ${i + 1}`);
});
console.log('Years we have :', years.length, years)

// Higher Order Functions
/*
Higher-order functions allow us to abstract over actions, not just values. 
They come in several forms. 
For example, we can have functions that create new functions.
*/
function greaterthan(n){
    return m => m > n;
}
// let greaterthan10 = greaterthan(10);
// ? is 11 greater than 10
// console.log(greaterthan10(11));

let greaterthan10 = greaterthan(1000);
// ? is 1000 greater than 11
console.log(greaterthan10(11)) 

// And we can have functions that change other functions.
function noisy(f){
    return (...args) => {
        console.log('calling with ', args)
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
console.log(noisy(Math.min)(3,2,1));

// We can even write functions that provide new types of control flow.

function repeat1(n, action) {
    let result = 0;
    for (let i = 0; i < n; i++) {
      result = action(i);
    }
    return result;
}
// proof of old function
// console.log(repeat1(10,action))
// proof of action
console.log(action(10))
// console.log(1+2+3+4+5+6+7+8+9);

// function unless(test, then){
//     if (!test) then();
// }

// repeat1(4, n=> {
//     unless(n%2==1, ()=>{
//         console.log(n,'Is even');
//     });
//     unless(n%2==0, ()=>{
//         console.log(n, 'Is odd');
//     });
// });

/*
There is a built-in array method, forEach, 
that provides something like a for/of loop as a higher-order function.
*/
a = [1,2,3,4,5]; 
a.forEach(l => console.log(l));

/*
Filtering arrays
To find the scripts in the data set that are still in use, 
the following function might be helpful. It filters out the 
elements in an array that don’t pass a test.
*/

Scripts = {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    }
// function filter(array, test){
//     let passed = [];
//     if (array == Object){
//         return test(array);
//     }else if (array!=Object){
//         for (let element of array){
//             if (test(element)){
//                 passed.push(element);
//             }
//         }
//     }

//     return passed;
// }
// Scripts = [1,2,3,4,5]


// console.log(filter(Scripts, script => script.direction == 'ttb'));

// Transforming with map

// function map(array, transform){
//     let mapped = [];
//     for (let element of array){
//         mapped.push(transform(element));
//     }
//     return mapped;
// }

// let rtlscripts = filter(Scripts, s => s.direction == "rtl")
// console.log(rtlscripts)

console.log('Function loop started')
// Solution
function loop(start, test, update, body){
    for(let value=start; test(value); value=update(value)){
        body(value);
    }
    console.log('Function loop Ended')
}
loop(3, n=> n > 0, n=> n - 1, console.log)

var li = [100, 120, 90]
var largest = Math.max.apply(Math, li);
var smallest = Math.min.apply(Math, li);
console.log(largest);
console.log(smallest)
