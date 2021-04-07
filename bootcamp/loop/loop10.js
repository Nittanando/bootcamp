var firstNum= window.prompt("enter the first number: ")
var num1= Number(firstNum)

var secondNum= window.prompt("enter the second number: ")
var num2= Number(secondNum)

for(var i=1; i<=num1; i++){
    if(num1 % i == 0 & num2 % i == 0){
        var hcf= i
    }
}
var lcm= (num1*num2)/hcf
console.log("lcm is: "+ lcm + " hcf is : " + hcf)