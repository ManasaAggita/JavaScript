//const express=require('express')
//import {Express} from "express"
//Arrow functions: new syntax for defining functions
//------------------------------------------------------------------------------------------------------------------
const myfunction =(input)=>{
console.log('Executed Function')
}

//------------------------------------------------------------------------------------------------------------------
//Ternary operator-> one line if else block
let friends=['james','manasa','karl']
let isFriend= friends.includes('karl')?true:false
console.log(isFriend)
//------------------------------------------------------------------------------------------------------------------
//optional chaining-> usesl in nested dictionaries
const manasa={
    hobbies:{
        hiking:{
            hikikng_boots:2
        }
    }
}
console.log(manasa.hobbies.hiking.hikikng_boots)
//code breakes if we use console.log(manasa.hiking.hikikng_boots) incase if we miss a key so use optional chaing i.e, ?
//console.log(hobbies?.hiking?.hikikng_boots)
//It prevents an error when a property in an object chain is undefined or null, but only if the object itself exists. i.e. from the abo ve example manasa has to be difiend if not it will throw error
console.log(manasa?.hiking?.hikikng_boots)
//------------------------------------------------------------------------------------------------------------------
//Object Destructuring

// let person={
//     name:'karl',
//     age: 34
// }
// let name= person.name;
// let age=person.age;
// console.log(name,age)

//insted of the above syntax to destructure the object use below syntax

let person={
    name:'karl',
    age: 34
}
const {name,age}=person;
console.log(name,age)
//------------------------------------------------------------------------------------------------------------------
//Array Destructuring
let oldArray=[4,5]
let val1=oldArray[0];
let va2=oldArray[1];
let[value1,value2]=oldArray //array destructuring syntax
console.log(value1,value2)
//------------------------------------------------------------------------------------------------------------------
//Template Literal String
let my_nmae='manasa'
console.log('Hello my name is'+my_nmae+'and i like fraction 3/8 which has value of'+3/8)
console.log(`hello my name is ${my_nmae} and
     i line fraction 3/8 whih has the value of ${3/8}`) //can be split into multiple lines
//------------------------------------------------------------------------------------------------------------------
//Short Circuits -> and or
let person_dict ={name:'karl'}

//for syntax like below
if(person_dict.name){
    let person_dict_name_2='kit'
}
//its equivalent is below
let person_dict_name_2=person_dict.name && 'kit'//if persondict has name then asign its value as kit just like terrenary operators

//similary for or
let person_dict_name_3=person_dict.name || 'defauult name' //else if it doesnt comntain  anme assign a default name
//------------------------------------------------------------------------------------------------------------------
//Enhanced object literal
//------------------------------------------------------------------------------------------------------------------
//Spread operator-> Dictionary and array
let demo_arrya=[1,2,3,4,5]
let demo_spread_array=[...demo_arrya,6,7,8] //...use triple dots to copy the aray 1 into second arraty
let demo_object={
    color:'blue'
}
let demo_object2={
    ...demo_object,
    food:'ice-cream'

}

console.log(demo_object2)
//------------------------------------------------------------------------------------------------------------------
//array methods
let my_arr=[5,7,8,23,4,5,623,66]

//for each
my_arr.forEach((current_value,current_index)=>{
    console.log(`the current value is ${current_value} & the current index is ${current_index}`) //this does not return anything
})

//map
//to loop over array and new array with vaklues 2* original vvalues -. situtaions like this use map

let new_array = my_arr.map((current_value,current_index)=>{
    return current_value*2//map return values
})
console.log(new_array)
//------------------------------------------------------------------------------------------------------------------

//filter
let filtered_array=my_arr.filter((current_value,current_index)=>{
    let is_even=current_value%2===0
    return !is_even

})
console.log(filtered_array)
//------------------------------------------------------------------------------------------------------------------
//reduce -> map, for each, filter in one
let reduced_array=my_arr.reduce((accumulator,current_value,current_index)=>{
return accumulator+`,${current_value}:${current_index}`

},'') //o/p is string
console.log(reduced_array)
















