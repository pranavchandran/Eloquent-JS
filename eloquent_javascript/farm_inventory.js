// function printfarminventory(cows, chickens){
//     let cowstring = String(cows);
//     while (cowstring.length < 3){
//         cowstring = "0" + cowstring;
//     }
//     console.log(`${cowstring} Cows`);
//     let chickenstring = String(chickens);
//     while (chickenstring.length < 3){
//         chickenstring = "0" + chickenstring;
//     }
//     console.log(`${chickenstring} Chickens`);
// }

// printfarminventory(7, 11)
/*
Mission accomplished! But just as we are about to send the farmer the code (along with a hefty invoice),
 she calls
 and tells us she’s also started keeping pigs, 
 and couldn’t we please extend the software to also print pigs?
 */

// function printzeropaddedwithlabel(number, label){
//     let numberstring = String(number);
//     while (numberstring.length < 3){
//         numberstring = "0" + numberstring;
//     }
//     console.log(`${numberstring} ${label}`)
// }

// function printfarminventory(cows, chickens, pigs){
//     printzeropaddedwithlabel(cows, "Cows")
//     printzeropaddedwithlabel(chickens, "Chickens")
//     printzeropaddedwithlabel(pigs, "Pigs")
// }
// printfarminventory(7, 11, 3)

/*
Instead of lifting out the repeated part of our program wholesale, 
let’s try to pick out a single concept.
*/

function zeropad(number, width){
    let string = String(number);
    while (string.length < width){
        string = "0" + string;
    }
    return string;
}

function printfarminventory(cows, chickens, pigs){
    console.log(`${zeropad(cows, 3)} Cows`);
    console.log(`${zeropad(chickens, 3)} Chickens`);
    console.log(`${zeropad(pigs, 4)} Pigs`)
}

printfarminventory(7, 16, 3);



