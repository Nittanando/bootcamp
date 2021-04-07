function convertUpperCase(str1) {
    var array1 = str1.split('');
    var output = [];
    var temp;
    for(let i = 0; i < array1.length; i++) {
      if(array1[i].charCodeAt(0) >= 97 && array1[i].charCodeAt(0) <= 122) {
        temp = String.fromCharCode((array1[i].charCodeAt(0) - 32))
        output.push(temp)
      } else {
        output.push(array1[i])
      }
    }
    return output.join('')
  }

  function convertLowerCase(str2) {
    var array2 = str2.split('');
    var output = [];
    var temp2;
    for(let i = 0; i < array2.length; i++) {
      if(array2[i].charCodeAt(0) >= 65 && array2[i].charCodeAt(0) <= 90) {
        temp2 = String.fromCharCode((array2[i].charCodeAt(0) + 32))
        output.push(temp2)
      } else {
        output.push(array2[i])
      }
    }
    return output.join('')
  }
  
  var inputs=window.prompt('enter the string: ')
  var conver=window.prompt('select 1 for UPPERCASE, & 2 for lowercase: ')
  var conver1=Number(conver)
  if(conver1 == 1){
    console.log(convertUpperCase(inputs))
  }
  else{
    console.log(convertLowerCase(inputs))
  }