var maxNum= window.prompt("enter the max number that you want to print upto: ")
var num= Number(maxNum)
var i=1

for(i=1; i<=num; i++){
    if(i%2 == 0){
        console.log("even numbers: " + i)
    }
}
for(i=1; i<=num; i++){
    if(i%2 !== 0){
    console.log("odd numbers: " + i)
    }
}