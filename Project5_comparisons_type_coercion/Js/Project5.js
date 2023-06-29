typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null            

let str = 20;
//concatenating at the end of integer variable
str += " Testing '+=' operator: ";  
str += 42 + ' ';
str += {} + ' ';
str += null;
console.log(str);

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

x = 10;
y = 10;
document.write(x === y);

document.write(3 == 11);

const a = 3;
const b = (a > 0 && b > 0);
(a > 0 && b > 0);