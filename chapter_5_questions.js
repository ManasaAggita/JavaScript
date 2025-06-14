// 1. Write a JavaScript class named Rectangle that has two properties, width and height, initialized through its constructor. 
// Then, instantiate an object of Rectangle with a width of 5 and a height of 10.
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height
    }
    calculateArea(){
        return this.width*this.height
    }

}
const rectangle_obj = new Rectangle(5, 10)
console.log(rectangle_obj)
console.log('Area of rectangle is',rectangle_obj.calculateArea())

// 2. How do you create a constructor within a class named Circle that initializes a property 
// radius and sets its value based on the argument passed when 
// a new Circle instance is created? Create an instance of Circle with a radius of 4.
class Circle{
    constructor(radius){
        this.radius=radius;
    }

}
const circle_obj = new Circle(4)
console.log(circle_obj)
// 5. Create a class named Animal with a constructor that initializes a property species. Then, define a
//  subclass named Dog that inherits from Animal and adds an additional property name in its constructor. 
// How do instances of Dog access methods defined on Animal's prototype?

class Animal {
    constructor(species){
        this.species=species;
    }
}
class Dog extends Animal{
    constructor(species, name){
        super(species)
        this.name=name
    }
}
const obj = new Dog('Dolmition','Tomy')
console.log(obj)