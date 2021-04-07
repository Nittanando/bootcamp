var maxNum= window.prompt("enter the number: ")
var num= Number(maxNum)

for(var i=0; i<=num; i++){
    if(num%i == 0){
        console.log(i)
    }
}