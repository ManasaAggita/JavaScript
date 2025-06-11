//Question1
let arr=[3,5,6,78,34,25,6,89,23,56,90,567,34,21,88,5,6,890]
let output=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0)
        continue;
    output.push(arr[i])
 
}
console.log(output)

////  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.
const details=[
    {name:'Manasa', age:27},
    {name:'Mahima', age:24},
    {name:'Karthik', age:32},
    {name:'Rohini', age:47},
    {name:'Srikanth', age:53}
]
function oldestPerson(){
let hightest_age=details[0].age;
for(let i=0;i<details.length;i++){
    if(details[i].age>hightest_age)
        hightest_age=details[i].age
}
return hightest_age;
}
let oldest= oldestPerson();
console.log(oldest);
//// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.

let array_of_objects = [
    { price: 4.2 },
    { price: 8.3 },
    { price: 2.2 }

]
array_of_objects.sort(function(a,b){
    return (a.price-b.price)
    //if a.price>b.price sorts in descending order else ascending order
})
console.log('Sorted arry is', array_of_objects)

// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.

let demo_array = [0, 1, 2, 3, 4, 5]
let new_array=demo_array.slice(1, demo_array.length-1)
console.log(new_array)

// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.
let shopping_cart={
    
        shoes:
        {
            quantity:1,
            price:30

    },
    
        shirt:
        {
            quantity:1,
            price:30

    }

    
}
console.log(shopping_cart['shoes'].price)//bracket notation. To access an object property using bracket notation with a literal string (like 'shoes'), you must enclose the property name in quotes.
console.log(shopping_cart.shoes.price); // Correct way using dot notation
function sumOfQuantity(shopping_cart){
    let sum=0;
    
    let keys=Object.keys(shopping_cart); //op array of string['shoes', 'shirt']
    for(let i=0;i<keys.length;i++){
        sum+=shopping_cart[keys[i]].quantity* shopping_cart[keys[i]].price

    }
    return sum;
}
console.log("Total sum of pproductis is", sumOfQuantity(shopping_cart))

// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.
//when assigning the object to new object, if changes are made in old object the new object should not reflect those chages it should have the value that it was assigned earlier.
//Ex: of how not to happen
let friend = {
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}
 let new_friend={}
 function deepClone(friend){
    new_friend=friend;
    return new_friend

 }
 
new_friend=deepClone(friend);
friend.james= {
        hobbies: ['Sleeping']
    }

console.log(new_friend) //op-> { rupert: { hobbies: [ 'Sleeping' ] } }

//correct deep clone
let friends = {
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}
function correctDeepClone(friends){
    let new_friends={}
    let keys=Object.keys(friends)
    for(let i=0;i<keys.length;i++){
        new_friends[keys[i]]=friends[keys[i]]
        
    }
    return new_friends


 }
 
new_friend_correct=correctDeepClone(friends);
friends.james= {
    hobbies: ['Sleeping']
}
console.log(new_friend_correct)
// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.

let student = {
    chemistry: {
        grade: 9
    },
    physics: {
        grade: 7
    },
    maths: {
        grade: 1
    }
}
function averageGrade(student){
    let average =0;
    let sum=0;
    let keys =Object.keys(student);
    for(let i=0;i<keys.length;i++){
       sum+=student[keys[i]].grade;

    }
    average=sum/keys.length;
    return average;
}
console.log(averageGrade(student));
// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.
function oldFunction(){
    let count=0;
    return function(){
        count++;
        console.log(count)
    }
}
let inc=oldFunction()
inc()
inc()
// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.

let grades_array = [
    { subject: 'maths', grade: 10 },
    { subject: 'spanish', grade: 2 },
    { subject: 'literature', grade: 6 }
]
function sortByGrade(){
    grades_array.sort(function(a,b){
        return a.grade-b.grade
    })
    return grades_array
}
console.log("sorted arry is ", sortByGrade())
// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.

let array_of_short_strings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word']

function filter(){
    let new_array=[]
for(let i=0;i<array_of_short_strings.length;i++){
    if(array_of_short_strings[i].length>=5)
        new_array.push(array_of_short_strings[i])

}
return new_array
}
console.log(filter())
// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.

let sentence = 'hello world my name is hello, is is , what a grade world, my, banana, james, cool'
let word=sentence.replaceAll(',','').split(' ')
function count(){
    let counter={}
    for(let i=0;i<word.length;i++){
        if(word[i] in counter){
            counter[word[i]]+=1;
        }
        else{
            counter[word[i]]=1;
        }
    }
    return counter;
}
console.log(count())
