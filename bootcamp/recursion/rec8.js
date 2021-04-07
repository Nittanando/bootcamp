function factor(num){
    var flag = 0
    for(var i=2; i<num/2; i++){
        if(num%i == 0){
            console.log(num+ " is not a prime number")
            flag=1
            break;
        }
    }
    if(flag== 0){
        console.log(num + " is a prime umber")
    }
    
}
var inputs=window.prompt("enter the number: ")
var inputs1=Number(inputs)

if(inputs1>0){
    var result=factor(inputs)
}
else{
    console.log("invalid input!!")
}