var maxNum= window.prompt("enter the max term: ")
var num= Number(maxNum)

var a=0; var b=1; var c=0;
for(var i=0; i<=num; i++){
    a = b;     
    b = c; 
    c = a + b;
    console.log(c)
}