// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters. Return true if all characters are unique, 
// and false otherwise. Assume the string only contains lowercase letters
let string1='manasa'
let string2="abcdefghijkl"
let isUnique=((str)=>{
    let count_dict={}
   for(let i=0;i<str.length;i++){
    let current_char=str[i];
    if(current_char in count_dict)
        return false
    else{
        count_dict[current_char]=1;
    }
    return true;

   } 
})
console.log(isUnique(string2))

// 2. Merge Sorted Arrays
// Question: Given two sorted arrays nums1 and nums2, 
// write a function to merge them into a single, sorted array.
let arr1=[2,4,6]
let arr2=[1,3,5]
console.log([...arr1,...arr2].sort())

// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), some elements appear twice and others appear once. 
// Write a function that returns an array of all the elements that appear twice in the given array. You must achieve this with O(n) time complexity.
const allDuplicates=(arr)=>{
    let dict={};
    let output=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i] in dict && !output.includes(arr[i])  ){
            output.push(arr[i])
        }
        else{
            dict[arr[i]]=1;

        }



    }
    return output;
}
console.log(allDuplicates([2,3,5,2,3,7,8,9,9,9,2,4]))
// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. 
let start_array = [1, 2, 3, 4, 5, 6]
let k = 3
let finish_array = [4, 5, 6, 1, 2, 3]
function rotateArray(start_array,k){
    let end_values=start_array.slice(k)
    let start_values=start_array.slice(0,k);
    return [...end_values,...start_values]
}
console.log(rotateArray(start_array,k))



// 5. Valid Parentheses
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

let s = "()[]{}"
let s_2 = "([])[]]{}{]}"
function validParentheses(str){
    let stack=[]
    for(let value of str){
        if(value==='{' ||value==='['||value==='(' )
            stack.push(value);
        else if(value==='}' ){
            if(stack.pop()!=='{')
                return false;
            }
        else if(value===')' ){
                if(stack.pop()!=='(')
                    return false;
                }
         else if(value===']' ){
                    if(stack.pop()!=='[')
                        return false;
                    }
        
    }
    return true;
}
console.log(validParentheses(s_2))