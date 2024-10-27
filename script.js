/*function fnname() {
    console.log("called");
}

function fnadd(param1, param2) {
    console.log(param1 + param2);
}

fnadd(1, 2);
fnadd(1, 4);
fnadd("HEMANTH", "KUMAR");

{
    var a=10;
    let b=20;
    const c=4;
}
console.log(a);*/

/*var username="gmit";
var password="1234";

function fnvalidate(){
    var inputusername=document.getElementById("username").value;
    var inputpassword=document.getElementById("password").value;
    console.log(inputusername);
    console.log(inputpassword);
}

var a=4;
var b=5;
var c=9;
var d=7;*/

/*if(a==b && a==c && a==d) {
    console.log(true);
}
else{
    console.log(false);
}*/

/*if (inputusername === username && inputpassword === password){
    console.log(success);
}
else{
    console.log(false);
}*/
    

function signup(){
    let inputfirstname=document.getElementById("firstname").value;
    let inputlastname=document.getElementById("lastname").value;
    let inputemail=document.getElementById("email").value;
    var inputpassword=document.getElementById("password").value;
    var inputcpassword=document.getElementById("confirm password").value;
    let validatename=validatepage(inputfirstname,inputlastname);
    console.log(validatename);
 
}
function validatepage(inputfirstname,inputlastname){
    if(inputfirstname.length>4 && inputlastname.length>4)
        return true;
    else
        return false;
}