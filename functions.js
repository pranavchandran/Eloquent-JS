function plus(x){
    return x + 1
}
y = 3
console.log(plus(y))

// functions are values and assigned to variables
let square = function(x){
    return x * x;
}

// console.log(square(2))
console.log(square(plus(y)))

let x = 0
;[x,x+1,x+2].forEach(console.log)


