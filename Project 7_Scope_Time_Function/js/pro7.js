//Global Var//
var X =10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Local Var//
function Add_numbers_3() {
    var X = 25;
    document.write(20 + X + "<br>");
}

function Add_numbers_4() {
    document.write(X + 100);
}
Add_numbers_3();
Add_numbers_4();

//Console Log//
function Add_numbers_5() {
    var X =10;
    console.log(15 + X);
}

function Add_numbers_6() {
    console.log(X + 100);
}
Add_numbers_5();
Add_numbers_6();

//IF Statement//
function get_Date() {
    if(new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today";
    }
}

//Time_Function//
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if( Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if(Time >= 12 == Time < 18) {
        Reply ="It is afternoon.";
    }
    else {
        Reply ="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}