var numbers = [175, 50, 25];

function myfunc(total, num){
    return total-num;
}
function total(total, num){
    return total+num;
}
function lesser(total, num){
    return (a,b) => a<b;
}
console.log(numbers.reduce(myfunc));
console.log(numbers.reduce(total));
console.log(numbers.reduce(lesser));

// const f = x => (x % 2) === 0 ? x : 0;
// const f = (x => (x % 2)) === 0 ? x : 0;  