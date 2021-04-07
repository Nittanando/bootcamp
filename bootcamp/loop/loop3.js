var maxNum= window.prompt("enter the max number that you want to print upto: ")
var num= Number(maxNum)
var i=1
var evenSum=0
var oddSum=0

for(i=1; i<=num; i++){
    if(i%2 == 0){
        console.log("even numbers: " + i)
        evenSum= evenSum+i
    }
}
for(i=1; i<=num; i++){
    if(i%2 !== 0){
    console.log("odd numbers: " + i)
    oddSum= oddSum+i
    }
}

console.log("sum of even numbers: " + evenSum)
console.log("sum of odd numbers: " + oddSum)