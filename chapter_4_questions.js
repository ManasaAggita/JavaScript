// 1. Basic DOM Manipulation: How do you select an element with the ID main-title and 
// change its text content to "Welcome to the DOM World"?
let mainTitle = document.getElementById('main-title')
    mainTitle.innerText='Welcome to the DOM World'
// 2. Event Handling: Write the JavaScript code to listen for a click event on a 
// button with the ID submit-btn and alert "Button Clicked!".
let btn = document.getElementById('submit-btn')
function alertFunction() {
    alert('Button Clicked!')
}
btn.addEventListener('click', alertFunction())
//3. Dynamic Styling: How can you change the background color of a <div>
//  with the class highlight to yellow when a user hovers over it using JavaScript?
let hover = document.querySelector('.hover-div')
function hoverFunction(){
    hover.style.background='yellow'
}
hover.addEventListener('mouseover', hoverFunction() )
// 4. Element Creation and Insertion: Describe how to create a new <li> element, 
// set its text content to "New Item", and append it to an existing <ul> with the ID list-container.

let listContainer = document.getElementById('list-container')
let newItem= document.createElement('li')
newItem.innerText='New Item'
listContainer.appendChild(newItem)
// 5. Form Handling: Write a script to prevent the default submission of a form with the ID form-example and instead
//  console log the value of a text input field within the form when the submit button is clicked.
let form= document.getElementById('id-form')
function onClickSubmit(event){
    event.preventDefault()

}
form.addEventListener('submit', onClickSubmit)
// 6. Understanding Event Bubbling: Provide an example of stopping event bubbling 
// when clicking on a <button> contained within a <div> that both have click event listeners attached.
let button = document.getElementById('button-id')
function stopPropogation(event){
    event.stopPropogation()

}
button.addEventListener('click', stopPropogation)
// 7. Dynamic Page Styling: How can you toggle a class active on an element when it is clicked, 
// ensuring that if the class is present it gets removed, and if it's not, it gets added?
let toggleElement =document.getElementById('id-tootle')
function toggleStyle(){
    toggleElement.classList.toggle('active')
    //f the element has the class active, it will be removed.

//If the element doesn't have the class active, it will be added.

}
toggleElement.addEventListener('click', toggleStyle())
// 8. Advanced Event Handling: Write JavaScript code to change the text content of
 //a paragraph element to display the current time when a button is clicked.
 let pButton = document.getElementById('btn-id')
 let paragraph=document.getElementById('para-id')
 function buttonAction(){
    paragraph.innerText=new Date()

 }
pButton.addEventListener('click',buttonAction)
// 9. Event Listener Removal: How do you remove an event listener
//  from an element, and why might you need to do this?
document.getElementById('id1').removeEventListener('click', myFunction())
// 10. Manipulating Attributes and Properties: Write JavaScript code to change
//  the src attribute of an <img> element and explain the difference between attributes 
// and properties in the context of DOM elements.
/*
Attributes-properties defined in HTML
properties-Attributes defines in JavaScript

*/
document.querySelector('img').setAttribute('src','new.png')
// 11. Utilizing Dataset Attributes: Explain how to use data-* attributes within an HTML element to store
//  extra information and how to access this information using JavaScript.
let informationDiv = document.getElementById('info')
console.log(informationDiv.dataset.userId)

//<div id="info" data-user-id="12345" data-user-role="admin"></div>

