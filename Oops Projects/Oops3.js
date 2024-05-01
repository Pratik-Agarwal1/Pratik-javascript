class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}
let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());

//--output--
// Make: Toyota, Model: Camry, Year: 2020

//--Explaination--
/* class Vehicle {: This line initiates the definition of the Vehicle class.
constructor(make, model) { this.make = make; this.model = model; }: The Vehicle class has a constructor method that takes make and model parameters. Inside the constructor, it initializes the make and model properties of the Vehicle object with the values passed as arguments.
getInfo() { return Make: ${this.make}, Model: ${this.model}; }: This defines the getInfo method within the Vehicle class, which returns a string containing the make and model of the vehicle.
class Car extends Vehicle {: This line declares the Car class, which extends the Vehicle class, inheriting its properties and methods.
constructor(make, model, year) { super(make, model); this.year = year; }: The Car class has its constructor method, which takes make, model, and year parameters. It calls the constructor of its superclass (Vehicle) using super(make, model) to initialize the make and model properties inherited from the Vehicle class. Additionally, it initializes its own year property with the value passed as an argument.
getInfo() { return ${super.getInfo()}, Year: ${this.year}; }: This method overrides the getInfo method inherited from the Vehicle class. It calls the getInfo method of the superclass (Vehicle) using super.getInfo(), appends the Year: <year> string to it, and returns the concatenated string.
let myCar = new Car('Toyota', 'Camry', 2020);: This line creates a new instance of the Car class with the make 'Toyota', model 'Camry', and year 2020.
console.log(myCar.getInfo());: Finally, this line prints the result of calling the getInfo() method of the myCar object to the console. Since getInfo() method is overridden in the Car class, it returns a string combining the make, model, and year of the car.*/
