/*
Values of the type object are arbitrary collections of properties.
One way to create an object is by using braces as an expression.
*/

let day1 = {
    squirell: false,
    events: ["work", "touched_tree", "pizza", "running"]
};
console.log('Squirell is there : ',day1.squirell)
console.log('Wolf ?',day1.wolf)
day1.wolf = false;
console.log('Wolf ? Now ',day1.wolf)

let descriptors = {
    work: "went to work",
    "touched tree": "Touched a tree"
}

// delete operator
let anObject = {left: 1, right: 2};
console.log(anObject.left);

// del
delete anObject.left;
console.log(anObject.left);
console.log(anObject);

// in
console.log("left" in anObject)
console.log("right" in anObject)

/*
To find out what properties an object has, you can use the Object.keys function.
You give it an object, and it returns an array of strings—the object’s property
names.
*/

console.log(Object.keys({x: 0, y: 0, z: 2}));

/*
There’s an Object.assign function that copies all properties from one object into another.
*/
let objectA = {a:1, b:2};
Object.assign(objectA, {c:3, d:4});
console.log(objectA);

// We will represent the journal that Jacques keeps as an array of objects.

let journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirell: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirell: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts"],
        squirell: true
    }
]

console.log(journal[0].squirell)
console.log(journal[1].events)

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

// console.log(object1 == object2); true
// console.log(object1 == object3); false

object1.value = 15;
console.log(object2)
console.log(object3.value)

const score = {visitors: 0, home: 0};
// this is ok
score.visitors = 1;
console.log(score);

// The lycanthrope’s log
/*
So, Jacques starts up his JavaScript interpreter and sets up the 
environment he needs to keep his journal.
*/

let journal1 = [];
function addentry(events, squirell){
    journal1.push({events, squirell});
};

/*
So then, every evening at 10 p.m.—or sometimes the next morning, after climbing
down from the top shelf of his bookcase—Jacques records the day.
*/
addentry(["work", "touched tree", "pizza", "running", "television"], false);
addentry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addentry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal1)
for (x of journal1){
    console.log(x.squirell);
    console.log(x.events);    
};

// This is the function that computes the ϕ coefficient from such an array:
function phi(table){
    return (table[3] * table[0] - table[2] * table[1])/
        Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]))

/*
To extract a two-by-two table for a
specific event from the journal, we must loop over all the entries and tally how many times
 the event occurs in relation to squirrel transformations.
*/
function tablefor(event, journal){
    let table = [0, 0, 0, 0];
    for(let i = 0; i < journal; i++){
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirell) index+= 2;
        table[index]+=1;
    }
    return table;
}

console.log(tablefor("pizza", journal))

console.log('\tArray loops')

// for (let i = 0; i < JOURNAL.length; i++) {
//     let entry = JOURNAL[i];
//     // Do something with entry
//   }

// Simple way to write such loops in modern JavaScript
for (let entry of journal){
    console.log(`${entry.events} ${entry.events.length} events.`)
}

/*
The final analysis
We need to compute a correlation for every 
type of event that occurs in the data set. To do that, 
we first need to find every type of event.
*/
function journalEvents(journal){
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(journal));

for (let event of journalEvents(journal)){
    console.log(event + ':', phi(tablefor(event, journal)));
}

for (let event of journalEvents(journal)){
    let correlation = phi(tablefor(event, journal));
    if (correlation > 0.1 || correlation < -0.1){
        console.log(event + ":", correlation)
    }
}

for (let entry of journal) {
    if (entry.events.includes("peanuts") &&
       !entry.events.includes("brushed teeth")) {
      entry.events.push("peanut teeth");
    }
  }
  console.log(phi(tablefor("peanut teeth", journal)));

//   Further arrayology
let todoList = [];
function remember(task){
    todoList.push(task);
};

function getTask(){
    return todoList.shift();
};

function rememberUrgently(task){
    todoList.unshift(task);
};

remember('erp fixing');
console.log(getTask())
rememberUrgently('bench installation')
console.log(todoList)

console.log([1, 2, 3, 2, 1].indexOf(4));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(3));
// → 3
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4

/*
The following example shows both concat and slice in action. It takes an array and an index,
and it returns a new array that is a copy of the original array 
with the element at the given index removed.
*/

function remove(array, index){
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 3))
