var numbers = [175, 50, 25];

function myfunc(total, num){
    return total-num;
}
function total(total, num){
    return total+num;
}
let less = (numbers)=> Math.min(numbers)
let add = (a,b) => a+b;

console.log(add(1,2))
console.log(numbers.reduce(myfunc));
console.log(numbers.reduce(total));
// console.log(numbers.reduce(lesser(numbers)));
console.log(less(numbers))

// const f = x => (x % 2) === 0 ? x : 0;
// const f = (x => (x % 2)) === 0 ? x : 0;  