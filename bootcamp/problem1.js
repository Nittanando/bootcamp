var physic= window.prompt("enter physics number: ")
alert("Number in physics is "+ physic)
var physics=Number(physic)

var chemist= window.prompt("enter chemistry number: ")
alert("Number in chemistry is "+ chemist)
var chemistry=Number(chemist)

var bio= window.prompt("enter biology number: ")
alert("Number in biology is "+ bio)
var biology=Number(bio)

var math= window.prompt("enter mathematics number: ")
alert("Number in mathematics is "+ math)
var mathematics=Number(math)

var compute= window.prompt("enter computer number: ")
alert("Number in computer is "+ compute)
var computer=Number(compute)

var totalPercentage= ((physics+chemistry+biology+mathematics+computer)/500)*100;
console.log("total percantage is "+totalPercentage)
if (totalPercentage<40){
    console.log("Result percentage: "+ totalPercentage + "Grade: F")
}
else if (totalPercentage<50){
    console.log("Result percentage: " + totalPercentage + "Grade: E")
}
else if (totalPercentage<60){
    console.log("Result percentage: " + totalPercentage + "Grade: D")
}
else if (totalPercentage<70){
    console.log("Result percentage: " + totalPercentage + "Grade: C")
}
else if (totalPercentage<80){
    console.log("Result percentage: " + totalPercentage + "Grade: B")
}
else if (totalPercentage<90){
    console.log("Result percentage: " + totalPercentage + "Grade: A")
}
else if (totalPercentage<100){
    console.log("Result percentage: " + totalPercentage + "Grade: A+")
}
