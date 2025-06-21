// 1. How do you create a string that includes both static text and the value of the variable name, using template literals?
let string1=`manasa`
console.log(`Hello my name is ${string1}`)
// 2. Convert the following function into an arrow function syntax:
function add1(a, b) {
    return a + b;
  }
  let sum=(a,b)=>{return a+b}
  console.log(sum(4,5))

  // 3. Given an object person with properties name and age, use object destructuring to create two variables name and age, extracting the values from the object.

const person = {
    name: 'james',
    age: 27
  }
  const {name,age}=person
  console.log(name,age)
  // 4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables 
  // named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.

const colors_array = ['red', 'green', 'blue']
const [first, second, third] = colors_array
  console.log(first,second,third)

  // 5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?
  let arr1=[1,2,3]
  let arr2=[...arr1,2,3.4,5]
  console.log(arr2)
  // 6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2,
  //  with properties from obj2 overwriting those in obj1 if they exist in both objects?
  let obj1={name:'manasa', age:27, gender:'female'}
  let obj2={name:'Kit', age:32}
  let combinedObject={...obj1,...obj2}
  console.log(combinedObject)
  // 7. How do you safely access the street property of address inside an object user that may not exist, using optional chaining?
  const user = { name: 'james' }
  console.log(user?.name?.street)
  // 8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".
  //let greet=(name,greeting=this.greeting|| 'hello')=>{console.log(greeting)}
  const greet = (name, greeting = 'Hello') => {
    console.log(`${greeting} ${name}`)}
  greet('manasa','aggi')
  // 9. Explain the difference between let and const keywords, and give an example of when you would use each.
  let chosen_number = 4
chosen_number = 83

const my_name = 'james'
//my_name = 'henry'
console.log(chosen_number)
console.log(my_name)
// 10. Write a for...of loop that iterates over an array numbers and logs each number to the console.
let arr=[2,5,67,8]
arr.forEach((value,index)=>{console.log(index,value)})

// for (let i = 0; i < new_array.length; i++) {
//   const current_value = new_array[i]
//   console.log(current_value)
// }

//for (let current_value of new_array) {
    //console.log(current_value)
  //}
  // 11. Given an array of numbers, use the map method to create a new array with each number squared.
  arr=[5,6,7,8]
  let newarr=arr.map((value,index)=>{
   return value*value});
   console.log(newarr)
   // 13. How do you use the logical AND operator to execute a function logMessage() only if the variable isLoggedIn is true?
   let isLoggedIn=false
   let logMessage=()=>{console.log("Indise function log message")}
isLoggedIn && logMessage()
// 14. How can you use the logical OR operator to assign a default value of "guest" to a variable username if the current user.name is undefined or null?
let user1={name:''}
console.log(user1.name || 'kit')
