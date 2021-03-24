

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



function range(start, end){
    var res = [];
    if (start===end) return start;
    for (let i=start; i<= end; i++){
        res.push(i);
    }
    return res;
}
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  }
  console.log(reduce([1,2,3,4,5,6],(a,b)=>a+b,0));

console.log([1,2,3,4,5].forEach((a)=> a + 1));