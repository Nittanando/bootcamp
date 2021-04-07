var eUnit=window.prompt("Input the Electricity unit: ")
var unit=Number(eUnit)

if(unit <= 50){
    var eBill=(unit * 0.50) + (unit * 0.20)
    console.log("Electricity Bill+charge: " + eBill)
}
else if(unit <= 150){
    var eBill= (25 + ((unit - 50) * 0.75)) + (unit * 0.20)
    console.log("Electricity Bill+charge: " + eBill)
}
else if(unit <= 250){
    var eBill=(100 + ((unit - 150) * 1.20)) + (unit * 0.20)
    console.log("Electricity Bill+charge: " + eBill)
}
else{
    var eBill=(220 + ((unit - 250) * 1.50)) + (unit * 0.20)
    console.log("Electricity Bill+charge: " + eBill)
}