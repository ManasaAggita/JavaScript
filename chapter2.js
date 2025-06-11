'hello'

console.log(4 + 4);
console.log('hello " mom')
//var, let, const
let number_eggs=4;
number_eggs=7;
console.log(number_eggs);
//to comment multiplelines.select the lines and click "ctrl+/""
//----------------------------------------------------------------------------------------------
//Data types
12245 //number
'hello' //string
// null
//underfined
true //boolean
false  //boolean
let friends= {manasa:'is super cool', manu:'isn\'t super cool', mahima:3} //dictionry, object
console.log(friends);
let ex_array=[1,2,45,6,67.7,78,45,23,56,67]
console.log(ex_array);
//---------------------------------------------------------------------------------------------
function myFirstFunction(){
    console.log(friends);
}
myFirstFunction();
//or
let my_fucntion_var=myFirstFunction;
my_fucntion_var();
//-------------------------------------------------------------------------------------------------
//operators use strict === equals to to check if thwo are of diiferent datatype if not if numbers are same irrective of string it will show true
function mysecondFunction(value1, value2){
    console.log(value1==value2); //true
    console.log(value1===value2)//false
}

let my_2fucntion_var=mysecondFunction;
my_2fucntion_var(3,'3');
//2
console.log(!0); //op is true
console.log(!''); //op is true
//----------------------------------------------------------------------------------------------
//To Export a function and access it in anothe file use below:
module.exports={
    my_2fucntion_var,myFirstFunction
}