class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    distance(){
        // Method to compute distance from  origin to point
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

// Point constructor to create the point objects.
let p = new Point(1, 1)
console.log(p.distance())