function countVowels(subject) {
    console.log("your input is: " + subject)
    var total =subject.length;
    var cons =total- (subject.match(/[aeiou]/gi) || []).length;
    console.log("number of consonatns: "+ cons);
    return console.log("number of vowels "+(subject.match(/[aeiou]/gi) || []).length);
    
}


var count = countVowels(window.prompt("enter string: "))

