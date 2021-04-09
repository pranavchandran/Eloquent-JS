class Worker {
    constructor() {

    }
  }

let squareWorker = new Worker('code/squareworker.js');
console.log(squareWorker)
squareWorker.addEventListener("message", event=>{
    console.log("The worker responded: ", event.data);
})

squareWorker.postMessage(10);