function countString(str, letter) {

    var num = new RegExp(letter, 'g');
    var count = str.match(num).length;
    return console.log("number of "+letterToCheck+ " is "+count);
}
var string = window.prompt('Enter a string: ');
var letterToCheck = window.prompt('Enter a letter to check: ');

var result = countString(string, letterToCheck);

console.log(result);