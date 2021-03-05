// Chapter-8
// Bugs and Errors
/*
function canyouspottheproblem(){
    "use strict";
    for(counter=0;counter<10;counter++){
        console.log("Happy happy")
    }
}
canyouspottheproblem();
*/
function person(name){this.name = name;}
person('Ferdinand')
console.log(name);

function test(label, body){
    if(!body())console.log(`Failed ${label}`);
}
test("convert Latin text to uppercase",()=> {
    return "hello".toUpperCase() == "HElLO";
});
test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
    return "مرحبا".toUpperCase() == "مرحبا";
});

// console.log('hello'.toUpperCase())

function numberToString(n, base=10){
    let result = '', sign = '';
    if (n < 10){
        sign = "-";
        n = -n
    }
    do{
        result = String(n%base) + result;
        n /= base;
    }while (n>0){
        return sign + result;
    }
}
console.log(numberToString(13, 10))
/*
function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result)) return null;
    else return result;
  }
  
  console.log(promptNumber("How many trees do you see?"));
*/
function lastElement(array){
    if(array == undefined){
        return {failed: true};
    
    }else if(array.length == 0){
        return {failed: true}
    }
    else{
        return {element: array[array.length - 1]};
    }
}
console.log(lastElement([01,2,3,4,5]))

// Errors
// function promptDirection(question) {
//     let result = prompt(question);
//     if (result.toLowerCase() == "left") return "L";
//     if (result.toLowerCase() == "right") return "R";
//     throw new Error("Invalid direction: " + result);
//   }
  
//   function look() {
//     if (promptDirection("Which way?") == "L") {
//       return "a house";
//     } else {
//       return "two angry bears";
//     }
//   }
  
//   try {
//     console.log("You see", look());
//   } catch (error) {
//     console.log("Something went wrong: " + error);
//   }

const accounts = {
    a: 100,
    b:0,
    c:20
};
function getAccount(){
    let accountName = prompt("Enter an account name");
    if(!accounts.hasOwnProperty(accountName)){
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}
// 1st version
/*
function transfer(from, amount){
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}
*/
// 2nd version
function transfer(from, amount){
    if (accounts[from] < amount) return;
    let progress = 0;
    try{
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    }finally{
        if(progress==1){
            accounts[from]+=amount;
        }
    }
}
// Selective Catching
// Here is an example that attempts to 
// keep on calling promptDirection until it gets a valid answer:
/*
for(;;){
    try{
        let dir = promptDirection("Where?");
        console.log("You Choose", dir)
        break;
    }catch(e){
        console.log("Not a valid direction, Try Again");
    }
}
class InputError extends error{}
function promptDirection(question){
    let result = prompt(question);
    if (result.toLowerCase()=='left') return "L";
    if (result.toLowerCase()=='right') return "R";
    throw new InputError("Invalid direction: " + result);
}

for(;;){
    try{
        let dir = promptDirection("Where?");
        // console.log('you choose', dir)
        document.getElementById("pn").innerHTML = ("You choose", dir);
        break
    }catch(e){
        if(e instanceof InputError){
            // console.log("Not a valid direction.Try Again")
            document.getElementById("pn").innerHTML = ("Not a valid direction.Try Again.");
        }else{
            throw e
        }
    }
}
*/
// Assertions
function firstElement(array){
    if(array == undefined || array.length==0 ){
        throw new Error("firstelement with []");
    }
    return array
};
console.log(firstElement([1,2,3,4]))