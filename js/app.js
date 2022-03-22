//function number 1//

function multiply (number) {
    var result = number + number;
    return result;
}

var num = multiply (5);
num = multiply (num)
console.log(num);

//function number 2//

function string (longstring) {
    var str = "A very long string";
    if (str.length > 10)str = str.substring(0,10);
    
}
str = true;
console.log(str);

//function number 3//

function array (strings) {
    var string = "Good Morning Users!";
    console.log("ph " +string);
}


