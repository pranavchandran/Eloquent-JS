

const plus1 = x => x + 1;
const square = x => x * x;

console.log(plus1('plus1', 5))
y=2;
console.log('square', square(plus1(y)))

let a=[];
a.push(1,2,3)
a.reverse()
console.log(a)

let points = [
    {x:0, y:0},
    {x:1, y:1}
]

points.dist = function(){
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x; //1
    let b = p2.y - p1.y; //1
    // the Pythagorean theaorem
    console.log(a, b)
    return Math.sqrt(a*a + b*b);
}
console.log(points.dist());




