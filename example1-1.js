// Computing charachter frequency histograms with Javascript
class DefaultMap extends Map {
    constructor(defaultvalue){
        super(); //invoke super class constructor
        this.defaultvalue = defaultvalue;
    }
    get(key){
        if (this.has(key)){//key is already in the map
            return super.get(key) //return its value from superclass
        }
        else{
            return this.defaultvalue;
        }
    }
}

// this class computes and displays letters frequency histograms
class Histogram{
    constructor(){
        this.lettercounts = new DefaultMap(0) //Map from letters to counts
        this.totalLetters = 0
    }
    add(text){
        // remove white spaces from the text and convert to uppercase
        text = text.replace(/\s/g,"").toUpperCase();
        // Now loop through the characters of the text
        for(let charachter of text){
            let count = this.lettercounts.get(charachter);
            this.lettercounts.set(charachter, count+1);
            // increment it
            this.totalLetters++;
        }
    }
    // convert the histogram to a string that displays an ascii graphic
    toString(){
        // convert the map to an array of [key, value] arrays
        let entries = [this.lettercounts];
        entries.sort((a,b)=>{
            if(a[1]===b[1]){
                return a[0]<b[0] ? -1 : 1;
            }
            else{
                return b[1]-a[1];
            }
        });
        // convert the counts to percentages
        for(let entry of entries){
            entry[1] = entry[1] / this.totalLetters*100;
        }
        // drop any entries less than 1%
        entries = entries.filter(entry=>entry[1]>=1);
        // now convert each entry to a line of text 
        let lines = entries.map(([1,n]) => `${1}: ${"#".repeat(Math.round(n))}${n.toFixed(2)}%`);
        return lines.join("\n");
    }
}
async function histogramFromStdin(){
    process.stdin.setEncoding("utf-8")
    let histogram = new Histogram();
    for await(let chunk of process.stdin){
        histogram.add(chunk)
    }
    return histogram;
    histogramFromStdin().then(histogram=>{
        console.log(histogram.toString());
    })
}

