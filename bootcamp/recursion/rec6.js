function factor(num){
    if(num==0){
        return 1;
    }
    else{
        return num*factor(num-1);
    }
}
var inputs=window.prompt("enter the number: ")
var inputs1=Number(inputs)

if(inputs1>0){
    var result=console.log("factorial of "+inputs1 +" is "+factor(inputs1))
}
else{
    console.log("invalid input!!")
}