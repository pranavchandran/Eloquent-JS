    // Arrow Functions
    const power = (base, exponent)=>{
        let result =  1;
        for (let count=0; count < exponent; count++){
            result *= base;
        }
        return result;
    };

    // Two definitions of the square do the samething
    const square1 = (x) => {return x * x};
    console.log(square1(3))

    const square2 = x => x * x;
    console.log(square2(3))

// Arrow function with no parameters
const horn = () =>{
    console.log('Toot');
};
console.log(horn())

// The call stack
function greet(who){
    console.log("Hello "+ who);
};
greet('Pranav')
console.log('Bye')

// recursion overloaded
// function chicken(){
//     return egg();
// }
// function egg(){
//     return chicken();
// }
// console.log(chicken() + "came first");

function minus(a, b){
    if (b===undefined)return -a;
    else return a-b;
}
console.log(minus(10))
console.log(minus(10, 2))

function power1(base, exponent=2){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power1(4));
console.log(power1(2, 6));

// closure
console.log('\t Closure')
function wrapValue(n){
    let local = n;
    return ()=>local;
};

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1())
console.log(wrap2())

// With a slight change, we can turn the previous example into a way to create functions 
// that multiply by an arbitrary amount.

function multiplier(factor){
    return number => number * factor;
}
let twice = multiplier(2);
console.log('instance ',twice(5))

// Recursion
// function power1(base, exponent){
//     if (exponent == 0){
//         return 1;
//     }else{
//         return base * power1(base, exponent-1);
//     }
// }

// console.log(power1(3, 0))

// Recursion solution
console.log('/t Recursion Solution')
function findSolution(target){
    function find(current, history){
        if (current == target){
            return history;
        }else if(current > target){
            return null;
        }else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`)
        }
    }
    return find(1, "1");
}
console.log(findSolution(13))

/*
How it works
find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!
*/

// Function names are also important
// This asks for a function of two arguments—the number of cows and the number of chickens. Let’s get coding.

function printfarminventory(cows, chickens){
    let cowstring = String(cows);
    while (cowstring.length < 3){
        cowstring = "0" + cowstring;
    }
    console.log(`${cowstring} Cows`);
    let chickenstring = String(chickens);
    while (chickenstring.length < 3){
        chickenstring = "0" + chickenstring;
    }
    console.log(`${chickenstring} Chickens`);
}

printfarminventory(7, 11)

// testing
// Define f to hold a function value
const f = function(a) {
    console.log(a + 2);
  };
  
  // Declare g to be a function
  function g(a, b) {
    return a * b * 3.5;
  }
  
  // A less verbose function value
  let h = a => a % 3;

  f(2)
  console.log(h(15))

// Using foreach and filter method
  let a = [1,2,3,4]
  a.forEach((a)=>{
    if(a%2==0){
      console.log(a)
    }
  })
  
  var even = [1,2,3,4,5,6];
  select = even.filter(p=> {
      if (p%2==0){
          return {selected:p}
      }
  });
  console.log(select)