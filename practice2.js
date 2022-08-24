const countVowel = (str) => {
    let vowel = 0;
    for (let index = 0; index < str.length; index++) {
       if (str.charAt(index)==="a"||str.charAt(index)==="e"||str.charAt(index)==="i"||str.charAt(index)==="o"||str.charAt(index)==="u") {
           vowel = vowel + 1;
       }
    }
    return vowel;
}


 console.log (countVowel("Ignatious  Roudreguizze"));