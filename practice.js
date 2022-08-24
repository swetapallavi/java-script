function add (a, b, c) {
    return a+b+c;
}

 const add = (a,b,c) => {
    return a+b+c;
 }

 function multiply(a,b,c) {
     return a*b*c;
 }

 const multiply = (a,b,c) => {
    return a*b*c;
 }

 function square (num) {
     return num*num;
 }

 const square = (num) => {
    return num*num;
 }

 function power (num1, num2) {
     let result = 1;
     for (let index = 0; index < num2; index++) {
        result = result*num1;
     }
     return result;
 }

 const power = (num1,num2) => {
     for (let index=0; index<num2; index++) {
         result = result*num1;
     }
     return result;
 }

 function isEven (num) {
     if (num % 2 === 0) {
         return true;
     } else {
         return false;
     }
 }

 function isDivisible (num1,num2) {
     if (num1%num2===0) {
        return true;
    } else {
        return false;
    }
 }

 function addAll (array) {
     let res = 0;
  for (let index = 0; index < array.length; index++) {
    res = res + array[index];     
  }
 }

 function greet (name) {
     console.log ("Hello" + name +"How are you?")
 }

 function countWord (string) {
     let count = 0;
     for (let index = 0; index < string.length; index++) {
         count = count + 1
     }
     return count;
 }

 const countWord = (string) => {
    let count = 0;
    for (let index = 0; index < string.length; index++) {
        count = count + 1
    }
    return count;
 }

 const countWord = (str) => {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str.charAt(index)===" ") {
          count = count + 1;
        } 
    }
    return count+1;
 }

 function increase (arr){
    for (let index = 0; index < arr.length; index++) {
        arr[index] = arr[index]+5;
    }
    return arr;
 }

function factorial(num) {
    let x = 1
    for (let index = 1; index <= num; index++) {
        x=x * index
    }
    return x;
}

const countVowel = (str) => {
    let vowel = 0;
    for (let index = 0; index < str.length; index++) {
       if (str.charAt(index)==="a"||str.charAt(index)==="e"||str.charAt(index)==="i"||str.charAt(index)==="o"||str.charAt(index)==="u") {
           vowel = vowel + 1;
       }
    }
    return vowel;
}

function isPrime (num) {
    for (let index = 2; index < num; index++) {
        if (num%index===0) {
            return false;
        }
    }
    return true;
}

function isAllSame (arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[0]==!arr[index]) {
            return false;
        } 
    }
    return true;
}

const countFive = (arr) => {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]===5) {
            count = count+1;
        }
    }
    return count;
}

// function noSpace (str) {
//     let arr = str.split(" ");
//     let strr = "";
//    for (let index = 0; index < arr.length; index++) {
//        strr = strr + arr[index];
//    }
//    return strr;
// }

function noSpace (str) {
    return str.split(" ").join("");
 }

 function greaterThanFive(intarr) {
     for (let index = 0; index < intarr.length; index++) {
         if (intarr[index]<5) {
             return false;
         } 
         
     }
     return true;
 }

 const greaterThanX = (intarr,x) => {
    for (let index = 0; index < intarr.length; index++) {
        if (intarr[index]<x) {
            return false;
        } 
        
    }
    return true;
 }

 const lessThanX = (intarr,x) => {
    for (let index = 0; index < intarr.length; index++) {
        if (intarr[index]>x) {
            return false;
        } 
        
    }
    return true;
 }

 function inRange (arr,x,y) {
     if (x>y) {
         console.log("error");
     } else if (greaterThanX(arr,x) && lessThanX(arr,y)){
         console.log("In range");
    } else {
        console.log("Out of range");
    }
 }
 
 function double (numarr){
    for (let index = 0; index < numarr.length; index++) {
        numarr[index] = numarr[index]*2;
    }
    return numarr;
 }

 const doubleAndIncrease = (numarr) => {
    double (numarr) & increase (numarr);
    return numarr;
 }

 console.log(doubleAndIncrease([1,2,3,4]));