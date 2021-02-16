let book = {
    topic: "Javascript",
    edition: 7
}

console.log(book.topic)
console.log(book.edition)

console.log(book['edition'])

// create new properties by assignment.
book.author = "Flanagan";

console.log(book)
book.contents = {}; 

// book.contents?.ch01?.sect1

let primes = [2,3,5,7];//array of 4 values, delimited with [and].
console.log(primes[0])
console.log(primes.length)
console.log(primes[primes.length-1])
primes[4]=9
primes[4]=11
let empty = [];
console.log(empty.length)

// An array with 2 elements Each element is an object
let points = [
    {x:0, y:0},
    {x:1, y:1}
]

let data = {
    trial1: [[1,2], [3,4]],
    trial2: [[2,3], [4,5]]
}

console.log(points[1].x + points[0].x)