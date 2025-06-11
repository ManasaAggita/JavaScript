//This is auto exported from chapter2 since we used modules.export={} there
const { myFirstFunction, my_2fucntion_var } = require("./chapter2");

//clousures
function counter(){
    let count=0
    return function(){ //anonymous functions
        count++;
        console.log(count)
    }
 
}
let increment = counter()
increment() //
increment()

/*
You have a box (counter()) with a counter inside (count = 0).
When you open the box, it gives you a button (the inner function).

But here's the trick:
Whenever you press the button, it remembers how many times it has been pressed, even though the box is closed.
The function you get from counter() remembers the count variable — that’s called a closure.

So even after the outer function is done, the returned function still has access to its "private memory."
 */
//--------------------------------------------------------------------------
myFirstFunction();
my_2fucntion_var();
//----------------------------------------------------------------------------
//Try, catch blocks
const str={hello:'world'}
function brokenCode(){
 try{
    const sub_str=str.hello.nice
    console.log(sub_str)
 }
 catch(err){
    console.log(err.message)
 }
}
brokenCode();
console.log("Execution continues") //beacue we used try catch exection continues, if not it will break our file and code stops execution.

