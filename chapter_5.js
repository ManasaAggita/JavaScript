//classes->template for object
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("Hello my name is", this.name)
    }

}
const me =new Person('Manasa','25')
const them =new Person('Kia','28')
console.log(them)
them.greet()
console.log(them.age)
//Inheritence
class Gamer extends Person{
    constructor(name, age, videogame){
        super(name, age)
        this.videogame=videogame;
    }
}
const gamer1= new Gamer('Harry',34,'GTA')
console.log(gamer1)

//getters and setters
class Test{
    constructor(name){
        this.name=name;
    }
get name(){
    return this._name //underscore is syntax
}
set name(value){ //these are not function . helps to intercept the changes made to the object
    console.log('object fetched')
    this._name=value
}


}
const obj = new Test('Lucy')
console.log(obj)
obj.name='Nick'
console.log(obj)