function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML ="2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("multiplication").innerHTML = " 6 * 8 = " + simple_Math
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 =" + simple_Math
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("more_Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math
}

var X = 5;
X++;
document.write(X);

var W = 5.25;
W--;
document.write(W)

window.alert(Math.random() * 100);