var salaryAmount = window.prompt("input salary amount: ")
var salaryInfo = Number(salaryAmount)
if(salaryInfo <= 10000){
    var hra = (salaryInfo*20)/100
    var da = (salaryInfo*80)/100
    console.log("HRA-Amount: " + hra + " DA-amount: " + da)
}

else if(salaryInfo <= 20000){
    var hra = (salaryInfo*25)/100
    var da = (salaryInfo*90)/100
    console.log("HRA-Amount: " + hra + " DA-amount: " + da)
}

else if(salaryInfo > 20000){
    var hra = (salaryInfo*30)/100
    var da = (salaryInfo*95)/100
    console.log("HRA-Amount: " + hra + " DA-amount: " + da)
}