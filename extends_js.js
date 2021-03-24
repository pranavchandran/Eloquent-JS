class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a '+ this.carname;
    }
}
// car1 = new Car('Benz')
// console.log(car1.present())
// Extending part
class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model + ' Model';
    }
}

my_car = new Model('Benz', '1958')
console.log(my_car.show())