function increase (arr){
    // for (let index = 0; index < arr.length; index++) {
    //     arr[index] = arr[index]+5;
    // }
    // return arr;
    return arr.map ((e) => {return e+5});
 }

 console.log(increase([1,2,3]));

 function double (numarr){
    // for (let index = 0; index < numarr.length; index++) {
    //     numarr[index] = numarr[index]*2;
    // }
    // return numarr;
    return numarr.map ((e)=>{return e*2});
 }

 function hiAll(name) {
    return name.map ((e)=>{return "hi ".concat(e)});
 }

console.log(hiAll(["pooja","amit"]));

const keepEven = (numarray) => {
   return numarray.filter ((e)=>{return e%2==0});
}

console.log(keepEven([2,4,5,7,8,6]));

function startsM (namearray) {
    return namearray.filter ((e)=>{return e.startsWith("m") ||  e.startsWith("M")});
}

