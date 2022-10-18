/*var h1=document.getElementsByTagName("h1");
h1[0].innerHTML="<h1> Document Object Model</h1>";

var dive=document.getElementsByTagName("div");
dive[4].innerHTML=" box 5";*/
 



function subcribe(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var output = document.getElementById("output");
    var out = document.getElementById("out");
    

    output.innerHTML= "Please enter your name" + name.value;
    out.innerHTML= "Please enter your email" + email.value;


   
}
