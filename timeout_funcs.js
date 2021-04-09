let bombtimer = setTimeout(() => {
   console.log("Boom") 
}, 500);

if (Math.random() < 0.5) { // 50% chance
    console.log("Defused.");
    clearTimeout(bombtimer);
  }

let ticks = 0;
let clock = setInterval(() => {
    console.log("tick", ticks++);
    if (ticks==10){
        clearInterval(clock);
        console.log("Stop")
    }
}, 200);