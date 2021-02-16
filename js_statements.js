// Javascript statements include conditionals and loops using the syntax

function abs(x){
    if(x>=0){
        return x;
    }
    else{
        return -x;
    }
}

console.log(abs(10))

// compute the sum of elements
function sum(array){
    let sum = 0;
    for (let x of array){
        sum += x;
    }
    return sum;
}

primes = [2,3,5,7,11]
console.log(sum(primes))

function factorial(n){
    // A function to compute factorials
    let product = 1;
    while (n>1){
        product *= n;
        n--;
    }
    return product;
}
console.log('Factorial : ',factorial(4))

function factorial2(n){
    let i, product=1;
    for(i=2; i<=n; i++){
        product *= i;
    }
    return product;
}
console.log(factorial2(5))
