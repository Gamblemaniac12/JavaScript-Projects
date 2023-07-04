
//typeof "John"                 // Returns "string"
//typeof 3.14                   // Returns "number"
//typeof NaN                    // Returns "number"
//typeof false                  // Returns "boolean"
//typeof [1,2,3,4]              // Returns "object"
//typeof {name:'John', age:34}  // Returns "object"
//typeof new Date()             // Returns "object"
//typeof function () {}         // Returns "function"
//typeof myCar                  // Returns "undefined" *
//typeof null            

var newParagraph = document.createElement("p"); 
var newText = document.createTextNode("'google' + '.' + ' com=" + 'google' + '.' + ' com');
//*newParagraph.appendChild(newText); 
//document.body.appendChild(newParagraph); 

var string1= 'google';
document.write(typeof(string1));
document.write('hello'+ 10);
document.write(10 + 10);
x = 10;
y = 10;
document.write(x === y);
document.write(3 == 11);
var newParagraph1 = document.createElement("p"); 
var newText1 = document.createTextNode('string1='+string1);
//newParagraph1.appendChild(newText1);
//document.body.appendChild(newParagraph1);

string1 +='.com';
var newParagraph1 = document.createElement("p"); 
var newText1 = document.createTextNode('string1='+string1);
//newParagraph1.appendChild(newText1);
//document.body.appendChild(newParagraph1); 

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
const a = 3;
const b = 5;
document.write(a > 0 && b > 0);

const q = 10;
const e = 12;
document.write(a < 11 && b < 13);