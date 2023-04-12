let pi=3.14159,r,c;
document.getElementById("button").onclick=function(){
    rad=document.getElementById("r").value;
    rad=Number(rad);
    console.log(rad,typeof(rad));
    c = 2 * pi * rad ;
    console.log(c,typeof(c));

    document.getElementById("rad").innerHTML="Circumference is "+c;
}