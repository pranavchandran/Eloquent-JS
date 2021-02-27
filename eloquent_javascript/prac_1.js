function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  }
  // console.log(reduce([1,2,3,4,5,6],(a,b)=> a>b ,0));
l = [1,2,3,4,5]
console.log()