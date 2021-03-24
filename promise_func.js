let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("I love You !!"); }, 3000);
    setTimeout(function(){myReject("not loving you");}, 5000);
  });
  
  myPromise.then(
    //   function(value) {console.log(value)},
      function(error){console.log(error)}
  );


// ... example
/*
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

*/