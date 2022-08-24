function increase (arr){
    for (let index = 0; index < arr.length; index++) {
        arr[index] = arr[index]+5;
    }
    return arr;
 }

 function double (numarr){
    for (let index = 0; index < numarr.length; index++) {
        numarr[index] = numarr[index]*2;
    }
    return numarr;
 }

 const doubleAndIncrease = (numarr) => {
    let a = double (numarr) ;
    let b = increase (a);
    return b;


    -
 }

 console.log(doubleAndIncrease([1,2,3,4]));