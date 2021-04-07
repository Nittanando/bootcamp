const inputs= window.prompt("input string: ")
console.log('given string: '+inputs)
const occur= window.prompt("input character to replace: ")
const n=inputs.search(occur)
const result=inputs.replaceAll(occur, "#")


console.log(result)