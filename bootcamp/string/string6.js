function maxCharacter(str){

    var str1 = str; 
    var reptCharsCount=0; 
    var ele='';
    var maxCount=0;
    for(var i=0; i< str1.length; i++){
        reptCharsCount=0;
        for(var j=0; j< str1.length; j++){
            if(str1[i] === str1[j]) {
                reptCharsCount++;
            }
        }
    
        if(reptCharsCount > maxCount) {
            ele = str1[i];
            maxCount = reptCharsCount; 
        }
    }
    return console.log("most frequent character: "+ele);
}
var inputs=window.prompt("input: ")
console.log("given inputs: "+inputs)
var data=maxCharacter(inputs)