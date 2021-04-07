var maxNum= window.prompt("enter the max number that you want to print upto: ")
var num= Number(maxNum)

for(var i=2; i<=num; i++){
    var flag = 0
    
    for(var j=2; j<i; j++){
        if(i%j == 0){
            flag=1
            break;
        }
    }
    if(flag == 0){
        console.log(i)
    }
}