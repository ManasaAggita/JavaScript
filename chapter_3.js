//data manipulation
let str1="This is javascript"
let length=str1.length
console.log("value at the end of the sting", str1[length-1])
let combined_Str='hello'+ ' '+'world'
console.log(combined_Str)
let combined_Str2='3'+5
console.log(combined_Str2)//converts into string
console.log(typeof(combined_Str2-5))//converts into number
console.log(combined_Str.indexOf('l'))//1st letter
console.log(combined_Str.split(" "))
console.log(combined_Str.split(''))//splits every letter
console.log(combined_Str.includes('z'))
console.log(combined_Str.replaceAll(' ', '_'))
//--------------------------------------------
//regex-> for paswd matching
//----------------------------------
//array,list
//curd -> know how to do these
//pop push shift unshift
let arr =[1,2,3,'str', 'boy']
console.log(typeof(arr))
arr.push(3);
console.log(arr)

console.log(arr.join(" "))
