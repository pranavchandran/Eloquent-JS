let rabbit = {};
rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`);
} 

rabbit.speak('English');

function speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`)
}

let white_rabbit = {type : 'white', speak};
let hungry_rabbit = {type : 'hungry', speak};
let pranav = {type: 'pranav', speak}

console.log(white_rabbit.speak("Oh my ears and whiskers, " + "how late it's getting!"));
console.log(hungry_rabbit.speak('Hey am als coming'));

console.log(speak.call(white_rabbit, 'am also with u'));
console.log(speak.call(pranav, 'AM aslo angry'))
/*
Arrow functions are different—they do not bind their own this but can see the this 
binding of the scope around them. Thus, you can do something like the 
following code, which references this from inside a local function:
*/

function normalize(){
    console.log(this.coords.map(n=> n/this.length));
}
function checking1(){
    console.log(this.part1.map(n=> n));
}
// console.log(normalize.call({coords: [0,2,3], length:5}));
// console.log(checking1.call({part1: [0,2,3], length:5}));

var numbers = [1,2,3,4,5,6,7,8]
function getsum(num1, num2){
    return num1 + num2;
};
console.log(numbers.reduce(getsum))

// Prototypes
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({})==Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

// let protorabbit = {
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}'`)
//     }
// };
// let killerrabbit = Object.create(protorabbit);
// killerrabbit.type = "killer";
// killerrabbit.speak('SKreeeee!!');

// function makerabbit(type){
//     let rabbit = Object.create(protorabbit);
//     rabbit.type = type;
//     return rabbit;
// };

// function Rabbit(type){
//     this.type = type;
// };
// Rabbit.prototype.speak = function(line){
//     console.log(`The ${this.type} rabbit says '${line}'`)
// }
// let weirdrabbit = new Rabbit('weird')

// console.log(Object.getPrototypeOf(Rabbit) ==
//             Function.prototype);
// // → true
// console.log(Object.getPrototypeOf(weirdRabbit) ==
//             Rabbit.prototype);
// // → true

// class Rabbit {
//     constructor(type){
//         this.type = type;

//     }
//     speak(line){
//         console.log(`{this.type} rabbit says '${line}'`)
//     };
// };
function Rabbit(type){
    this.type = type;
};
Rabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says '${line}'`)
}
// console.log(typeof Rabbit)
let killerrabbit = new Rabbit('Killer!');
let blackrabbit = new Rabbit('Black');
let oopsrabbit = new Rabbit('oops');
let whiterabbit = new Rabbit('whitec')

console.log(killerrabbit.speak('can i join'))
// console.log(killerrabbit);

let object = new class {getword() {return "hello";}};
console.log(object.getword())

Rabbit.prototype.teeth = "small";
Rabbit.prototype.size = "Large";
// killer
console.log('Killerrabbit teeth is :',killerrabbit.teeth)
console.log('Killerrabbit size is :',killerrabbit.size)
// black
console.log('Killerrabbit teeth is :',blackrabbit.teeth)
console.log('Killerrabbit size is :', killerrabbit.size)

console.log(typeof Rabbit.prototype)
console.log(Array.prototype.toString == Object.prototype.toString);
l = [1,2,3];
for(let x of l){
    console.log(x,':',typeof x)
}
console.log([1,2,3].toString());
console.log(l.toString());
/*
console.log('Checking with Maps')
let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
  };

  console.log(`Julia is ${ages['Júlia']}`)
  console.log('Is jack ages known', 'jack' in ages);
  console.log('Is tostring ages known?', "toString" in ages)
  console.log('Is tostring ages known?', "number" in ages)
*/

let ages = new Map();
ages.set('Boris', 39);
ages.set('Pranav', 32);
ages.set('Julia', 62);

console.log(typeof ages, ages);
console.log(`Pranav is ${ages.get("Pranav")}`);
console.log("Is Jack's age known?", ages.has("Julia"));
console.log(ages.has("toString"));

console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false

console.log('Polymorphism')

Rabbit.prototype.toString = function(){
    return `a ${this.type} rabbit`;
};

console.log(String(blackrabbit));
console.log(String(oopsrabbit));

console.log('\t Symbols')
console.log('Unlike strings, newly created symbols are\
            unique—you cannot create the same symbol twice.')

let sym = Symbol("name")
console.log(typeof sym)
console.log(sym == Symbol("name"));
Rabbit.prototype[sym] = 55;
console.log(blackrabbit[sym]);
console.log(whiterabbit[sym]);
Rabbit.prototype[sym] = 9;
console.log(whiterabbit[sym]);

const tostringsymbol = Symbol('toString');
Array.prototype[tostringsymbol] = function(){
    return `${this.length}cm of blue yarn`;
};
// const somemulti = Symbol('tomul');
// Array.prototype[somemulti] = function(){
//     a = `${this}`;
//     total = 0;
//     for(let x of a){
//         x
//     }
//     return total;
// }
// console.log([1,2].toString());
// console.log([1, 2][tostringsymbol]());
// console.log([1, 2, 3, 4][somemulti]());

let stringobject = {
    [tostringsymbol](){return "a juite rope";}
};
console.log(stringobject[tostringsymbol]())

// The iterator interface
let okiterator = "OK"[Symbol.iterator]()
console.log(okiterator.next());
console.log(okiterator.next());
console.log(okiterator.next());

/*
Let’s implement an iterable data structure.
We’ll build a matrix class, acting as a two-dimensional array.
*/

class Matrix {
    constructor(width, height, element=(x, y)=> undefined){
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++){
            for (let x = 0; x < width; x++){
                this.content[y * width + x] = element(x, y);
            }
        }
    }
    get(x, y){
        return this.content[y * this.width + x];
    }
    set(x, y, value){
        this.content[y * this.width + x] = value;
    }
}

class Matrixiterator{
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next() {
        if (this.y == this.matrix.height) return {done: true};
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };
        this.x++;
        if (this.x == this.matrix.width){
            this.x = 0;
            this.y++;
        }
        return {value, done:false};
    }
}
Matrix.prototype[Symbol.iterator] = function(){
    return new Matrixiterator(this);
}

let matrix = new Matrix(2,2, (x,y)=> `value ${x} ${y}`);
for (let {x,y,value} of matrix){
    console.log(x, y, value);
};

let varyingSize = {
    get size() {
      return Math.floor(Math.random() * 100);
    }
  };
console.log(varyingSize.size);

// Setter
class Temperature {
    constructor(celcius){
        this.celcius = celcius;
    }
    get fahrenheit(){
        return this.celcius * 1.8 + 32;
    }
    set fahrenheit(value){
        this.celcius = (value - 32) / 1.8;
    }
    static fromfahrehheit(value){
        return new Temperature((value - 32)/1.8);
    }
}
let temp = new Temperature(22)
console.log('Fahrenheit Temperature :',temp.fahrenheit)
temp.fahrenheit = 86;
console.log('Farhenheit changed by :',temp.celcius)

console.log(Temperature.fromfahrehheit(30));

// Inheritance
class SymmetricMatrix extends Matrix{
    constructor(size, element=(x, y) => undefined){
        super(size, size, (x,y)=>{
            if (x < y) return element(y, x);
            else return element(x, y)
        });
    }
    // console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
    set(x, y, value){
        super.set(x, y, value);
        if (x!=y){
            super.set(y, x, value);
        }
    }
}

let matrix1 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix1.get(2, 3));

// console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// console.log(new SymmetricMatrix(2) instanceof Matrix);

