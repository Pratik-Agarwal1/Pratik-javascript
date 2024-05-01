class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());

//--output--
//blue

//--explaination--

//class Shape {: This line begins the definition of the Shape class.
// constructor(color) { this.color = color; }: This defines the constructor method for the Shape class, which accepts a color parameter. Inside the constructor, it assigns the value of color to the color property of the Shape object being created.
// getColor() { return this.color; }: This method, getColor, is defined within the Shape class. It returns the value of the color property of the Shape object.
// class Circle extends Shape {: This line starts the definition of the Circle class, which extends the Shape class.
// constructor(color, radius) { super(color); this.radius = radius; }: The Circle class has a constructor method that accepts two parameters, color and radius. It calls the superclass constructor using super(color) to pass the color parameter to the Shape class constructor. Then, it initializes its own radius property with the provided radius parameter.
// class ColoredCircle extends Circle {: This line starts the definition of the ColoredCircle class, which extends the Circle class.
// constructor(color, radius) { super(color, radius); }: The ColoredCircle class also has a constructor method, which accepts color and radius parameters. It calls the constructor of its superclass (Circle) using super(color, radius) to pass both parameters to the Circle constructor.
// let coloredCircle = new ColoredCircle('blue', 5);: This line creates a new instance of the ColoredCircle class with the color 'blue' and radius 5.
// console.log(coloredCircle.getColor());: Finally, this line logs the result of calling the getColor() method of the coloredCircle object to the console. Since getColor() returns the value of the color property, it outputs 'blue'.