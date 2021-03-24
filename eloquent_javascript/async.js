// setTimeout(() => console.log("Tick"), 500);

// a = ()=> console.log('Pranav');
// console.log(a())

// import {bigOak} from "./crow-tech";

// bigOak.readStorage("food caches", caches => {
//   let firstCache = caches[0];
//   bigOak.readStorage(firstCache, info => {
//     console.log(info);
//   });
// });

let fifteen = Promise.resolve(15)
fifteen.then(value=> console.log(`Got ${value}`));

fifteen.then(value=> console.log(10*value))

function storage(name) {
    return new Promise(resolve => {
      (name => name);
    });
  }
console.log(storage('Pranav').then(value=> console.log(value)))

new Promise((_, reject)=> reject(new Error("Fail")))
  .then(value=> console.log("Handler 1"))
  .catch(reason=>{
      console.log("caught failure "+ reason);
      return "nothing";
  })
  .then(value=>console.log("Handler 2", value,))

let = {'a':1,b:2} = (r) => console.log(r);

