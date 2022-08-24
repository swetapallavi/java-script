// 1. ways to print JavaScript
// console.log("Hello world");
// console.log("Hello world", 4+6, "Another log")
// alert("hi");
// document.write("This is POOJA");

// 2. JavaScript console API (Apllication Programming Interface)
// console.log("Hello world");
// console.warn("This is warning");
// console.error("This is an error");
// console.assert(4 == (6 - 2));
// console.clear();

// 3. JavaScript variables
// What are vriables? Ans:- These are containers to store data values.
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// Data types in JavaScript
/*At a very high level, there are two types of data types in JavaScript.
1. Primitive data types:- numbers, strings, booleans, undefined, null, symbols. 
2. Reference data types:- arrays, objects.
*/  

// Numbers
var num1 = 455;
var num2 = 56.76;

// Strings
var str1 = "This is a string.";
var str2 = 'This is also a string';

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// Undefined; [It means no value defined for a variable]
// var und = undefined;
var und;
// console.log(und);

// Null - [It means we are giving instruction for putting nothing inside a variable]
var n = null;
// console.log(n);

// Arrays
var arr = [1,2,"POOJA",3,4,5]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[3]);

// Objects
var marks = {
    Ravi: 34,
    Shubham: 78,
    Harry: 99.97,
}
// console.log(marks);

// 4. Operators in JavaScript

// 1. Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a+b is", a+b);
// console.log("The value of a-b is", a-b);
// console.log("The value of a*b is", a*b);
// console.log("The value of a/b is", a/b); 

// 2. Assignment Operators
var c = b;
// c += 2; It means c = c+2;
// c -= 2; It means c = c-2;
// c *= 2; It means c = c*2;
// c /= 2; It means c = c/2;
// console.log(c);

// 3. Comparision Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// 4. Logical Operators

// 1. Logical and Operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// 2. Logical or Operators
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// 3. Logical not Operators
// console.log(!true);
// console.log(!false);

// 5. functions in JavaScript

// function pooja(a, b) {
//     c = (a+b)/2
//     return c;
// }
// DRY PRINCIPLE - Do not repeat yourself.
// c1 = avg(4, 6);
// c2 = avg(14, 16); 
// console.log(c1, c2);

// 6. Conditionals in JavaScript

/*var age = 31;
1. single if statement
if(age > 18) {
    console.log('You can drink rasna water');
}
2. if-else statement
if(age > 18) {
    console.log('You can drink rasna water');
}
else {
    console.log('You cannot drink rasna water');
}
3. if-else ladder
if(age > 32) {
    console.log('You are not a kid');
}
else if(age > 26) {
    console.log('Bachhe nahi rahe');
}
else if(age > 22) {
    console.log('Yes Bachhe nahi rahe');
}
else if(age > 18) {
    console.log('18 Bachhe nahi rahe');
}
else {
    console.log('Bachhe rahe');
}
console.log('End of ladder');
*/

// 7. Loops in JavaScript

// var arr = [1,2,3,4,5,6,7];

// 1. for loop
// for(var i=0;i<arr.length;i++) {
//     console.log(arr[i])
// }

// var str = "Hi";
// for(var i=0;i<5;i++){
//     console.log("Hi")
// }

// 2. forEach loop
// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = 0;
//const normal body temp. = 97.5F
// constant value cannnot be Changed.

// 3. While loop
// let j = 0;
// while (j<arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// 4. doWhile loop
// do {
//     console.log(arr[j]);
//     j++;
// } while (j<arr.length);

// 8. Break & Continue Statement in JavaScript.
// var arr = [1,2,3,4,5,6,7];
// for(var i=0;i<arr.length;i++) {
//     if(i==2){
//         break;
//         continue;
//     }
//     console.log(arr[i])
// }

// 9. Array Methods in JavaScript.

// let myArr = ["Pooja", "Amit", 54, "Pinky", "Papun", 25];
// console.log(myArr.length);
// myArr.pop();
// myArr.push('sweta');
// myArr.shift();
// myArr.unshift("Roja");
// console.log(myArr);
// const newLen = myArr.unshift("Roja")
// console.log(newLen);
// console.log(myArr.toString());
// console.log(myArr.sort());

// 10. String Methods in JavaScript.

// let String = "I am a good girl very good";
// console.log(String.length);
// console.log(String.indexOf("good"));
// console.log(String.lastIndexOf("good"));
// console.log(String.slice(0, 4));
// console.log(String.slice(2, 6));
// console.log(String.replace("girl", "boy")); 
// note:- String replace only replaces the first occurence of the element. 

// 11. Dates in JavaScript.

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getMonth());

// 12. DOM manipulation in JavaScript.

let elem = document.getElementById('click');
// console.log(elem);
let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// document.getElementById('click').click();
// document.getElementById('click').style.border = "2px solid blue";
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success");
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('button');
// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para.";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold.";
// tn[0].replaceChild(createdElement2, createdElement);
// tn[0].removeChild(createdElement2);

// selecting using querySelector
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// 13. Events in JavaScript.
// function clicked() {
//     console.log("The button was clicked.")
// }
// window.onload = function(){
//     console.log("The document was loaded.")
// }
// firstcontainer.addEventListener('click', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("clicked on container.")
// })
// firstcontainer.addEventListener('mouseover', function() {
//     console.log("Mouse on container.")
// })
// firstcontainer.addEventListener('mouseout', function() {
//     console.log("Mouse out of container.")
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML; 
// firstcontainer.addEventListener('mouseup', function() {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouseup when clicked on container.")
// })
// firstcontainer.addEventListener('mousedown', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("Mouse down when clicked on container.")
// })

// Arrow Functions
// function summ(a, b){
//      return a+b;
// }
// This arrow function is used if we need to insert function somewhere in the middle of something.
// summ = (a,b)=>{
//     return a+b;
// }

// 14. SetTimeout and Setinterval in JavaScript.
logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set time out fired</b>"
    console.log("I am your log")
}
// setTimeout(logKaro, 2000);
// setInterval(logKaro, 2000);
 
// // Use clearTimeout/clearInterval to cancel setTimeout/setInterval

// clr = setTimeout(logKaro, 2000);
// clr = setInterval(logKaro, 2000);
// clearTimeout(clr);
// clearInterval(clr);

// 15. Local Storage in JavaScript.
// localStorage.setItem('name', 'Pooja');
// localStorage;
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// 16. JSON in JavaScript.
let emp1 = {
    name : 'Amit',
    age : 33,
    skills:["JAVA","REACT"],
    department :{
        id : 'ASD23',
        manager : 'HARI'
    }
}
console.log(emp1)
console.log(JSON.stringify(emp1))

parsedemp = JSON.parse('{"name":"Sumit","age":32,"skills":["Java","HTML","CSS"],"department":{"id":"EDR43","manager":"HARI"}}')
console.log(parsedemp)
