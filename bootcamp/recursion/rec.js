function arrayinput(nmbr){

    var inputArray = [];
    

    for(var i=0; i<nmbr; i++) {
        inputArray[i] = prompt('Enter Element ' + (i+1));
    }

    console.log(inputArray);
}
var inputarr = window.prompt("how many elements? ")
var inputs=Number(inputarr)
var datapass = arrayinput(inputs)
