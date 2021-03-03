let object = Object.freeze({value: 5})
object.value = 10;
console.log(object)
let glass = Object.freeze({value: 5})
glass.value = 10;
console.log(glass)

let objnull = Object.create(null);
console.log(objnull)