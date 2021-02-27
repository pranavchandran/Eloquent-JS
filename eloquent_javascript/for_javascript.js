function range(start, end){
    var res = [];
    if (start===end) return start;
    for (let i=start; i<= end; i++){
        res.push(i);
    }
    return res;
}

console.log('objectrange:\n User can check the Object and there we get the value')
function objectrange(object,name){
    let newlist = []

    if (name!=undefined){
        for (let x of object){
            if (name in x){
                console.log(x[name])
            }
        }
    }
    for (let x of object){
        newlist = x;
        return newlist;
    }
}

console.log(objectrange(Scripts, 'living'))

// test case started
// console.log(range(0, 20));

// test case 2:
// a = [
//     {1:2},
//     {2:3},
//     {3:0},
//     {4:5}
// ]

// for (x of range(0,a.length)){
//     console.log(a[x])
// };

// testcase 3
console.log(range(1,1));

// get the total in an array
var numbers = [1,2,3,4,5,6,7,8]
function getsum(num1, num2){
    return num1 + num2;
};
console.log(numbers.reduce(getsum))
