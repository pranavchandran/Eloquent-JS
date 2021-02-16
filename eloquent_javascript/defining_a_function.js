const square = function(x){
    return x * x;
}
console.log(square(4))

const makeNoise = function(){
    console.log("Pling")
}
makeNoise()

const power = function(base, exponent){
    let result = 1;
    for (let count=0; count<exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(2, 10))

// Bindings and Scopes
let x = 10;
if (true){
    let y = 20;
    let z = 30;
    console.log(x + y + z);
}
// console.log(x + y) 
const halve = function(n){
    return n/2;
};
let n = 10;
console.log(halve(100))
console.log(n)

// Nested Scope
console.log('Nested Scope')
// const hummus = function(factor){
//     const ingredient = function(amount, unit, name){
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1){
//             unit += 's'
//         }
//         console.log(`${ingredientAmount}${unit}${name}`)
//     }
// };
// const ingredient = function(amount, unit, name){
//     let ingredientAmount = amount * 3;
//     if (ingredientAmount > 1){
//         unit += 's'
//     }
//     console.log(`${ingredientAmount}\t${unit}\t${name}`)
// }
// ingredient(1, "can", "chickpeas")

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

  hummus(2);

//   Funcitons as values
// Declaration Notation
function square_1(x){
    return x * x;
}
console.log("The future says", square_1(2))

function future(){
    return "you'll never have running car's."
}
console.log("The future says", future())


