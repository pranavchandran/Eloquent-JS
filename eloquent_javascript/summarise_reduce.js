// summarising reduce functions
console.log('Funciton reduce')
// function reduce(array, combine, start){
//     let current = start;
//     for (let element of array){
//         current = combine(element, current);
//     }
//     return current;
// }
// console.log(reduce([1,2,3,4], (a,b)=> a+b, 0));
// console.log(reduce([1,2,3],(a,b)=>a*b, 1))

// function charachtercount(script){
//     return script.ranges.reduce((count, [from, to])=>{
//         return count + (to - form);
//     }, 0);
// }

// console.log(Scripts.reduce((a,b)=>{
//     return charachtercount(a) < charachtercount(b) ? b:a;
// }));

// let biggest = null;
// for (let script of scripts){
//     if (biggest==null || charactercount(biggest) < charactercount(script)){
//         biggest = script;
//     }
// }
// console.log(biggest)

// Finding average by reduce
function average(array){
    return array.reduce((a,b)=>a+b/array.length);
}

console.log('Avereage = ',average([1,2,3,4,5]))

/*
console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204
*/
function range(start, end){
    var res = [];
    if (start===end) return start;
    for (let i=start; i<= end; i++){
        res.push(i);
    }
    return res;
}
Scripts = [{
    'living': 'BNGLR',
    'year': 2020
}]

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



// Scripts = [{
//     'living': 'BNGLR',
//     'year': 2020
// }]

// console.log(typeof Scripts)
// for (let x of Scripts){
//     console.log(x.living)
// }


// let total = 0, count = 0;
// for (let script of SCRIPTS) {
//   if (script.living) {
//     total += script.year;
//     count += 1;
//   }
// }
// console.log(Math.round(total / count));

/*
Remember that each script has an array of character code ranges 
associated with it. So given a 
character code, we could use a function like this to find the corresponding
script (if any):
*/
// function charachterscript(code){
//     for (let script of Scripts){
//         if (script.ranges.some(([from, to])=>{
//             return code >= from && code < to;
//         })){
//             return script;
//         }
//     }
//     return null;
// }

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log('horseshoe and length: ', horseShoe.length);
console.log(horseShoe[0]);
console.log(horseShoe.charCodeAt(1));
console.log(horseShoe.codePointAt(0));

console.log(Scripts.reduce((a,b)=>{
    return charachtercount(a) < charachtercount(b) ? b:a;
}));

let roseDragon = "🌹🐉";
for (let char of roseDragon){
    console.log(char);
};
x = 0;
i = 0;
output = '';
for(let x=0; x <= 20; x++){
    for (let i=1; i<= x; i++){
        output += roseDragon + ' ';
        // console.log(roseDragon)
    }
    console.log(output);
    output = '';
}

// console.log(range([roseDragon]))

function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();
// findIndex
// a = [1,2,3,4,5]
// console.log(a.findIndex(c=> c > 0 ))

/*
function countby(items, groupname){
    let counts = [];
    for (let item of items){
        let name = groupname(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1){
            counts.push({name, count:1})
        }else{
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countby([1,2,3,4,5], n=> n>2));
*/
function countby(items, groupname){
    let counts = [];
    for (let item of items){
        let name = groupname(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1){
            counts.push({name, count:1})
        }else{
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countby(range(1,20), n=> n%2==0));

function textscripts(text){
    let scripts = countby(text, char=> {
        let script = charachterscript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name})=> name != "none");
    let total = scripts.reduce((n, {count})=> n + count, 0)
    if (total == 0) return 'No scripts found';
    return scripts.map(({name, count})=>{
        return `${Math.round(count*100/total)}%${name}`;
    }).join(", ")
}
// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// console.log(0 ? 1 : "true")


