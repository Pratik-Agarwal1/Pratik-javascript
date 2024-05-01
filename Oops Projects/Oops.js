class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();

//--output--
// Buddy barks.

//--Explaination--

// class Animal {: This line starts the definition of a class named Animal.

//     constructor(name) { this.name = name; }: This line defines a constructor method for the Animal class, which takes one parameter name. Inside the constructor, it assigns the value of name to the name property of the object being created.

//     speak() { console.log(${this.name} makes a noise.); }: This line defines a method named speak for the Animal class. When called, this method logs a message to the console indicating that the animal makes a noise, using the name property of the object.

//     class Dog extends Animal {: This line starts the definition of a class named Dog, which extends (inherits from) the Animal class. This means that Dog inherits all the properties and methods of Animal and can also have its own properties and methods.

//     speak() { console.log(${this.name} barks.); }: This line defines a method named speak for the Dog class. This method overrides the speak method inherited from the Animal class. When called, it logs a message to the console indicating that the dog barks, using the name property of the object.

//     let dog = new Dog('Buddy');: This line creates a new instance of the Dog class with the name 'Buddy'. It calls the constructor of the Animal class (which the Dog class inherits) to initialize the name property.

//     dog.speak();: This line calls the speak method on the dog object. Since the speak method is overridden in the Dog class, it executes the speak method defined in the Dog class, logging 'Buddy barks.' to the console.