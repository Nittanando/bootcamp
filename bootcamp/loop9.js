function reverseNum(){
    var maxNum= window.prompt("enter the number: ")
    var num= Number(maxNum)
    var reverse=0;
    while(num!=0){
        var remainder=num%10;
        reverse=reverse*10+remainder;
        num = Math.floor(num/10);
    
    }
console.log("reverse order is: " + reverse)
}