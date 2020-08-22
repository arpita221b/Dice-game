
var num1= Math.random();
num1=(num1*6) + 1 ;
var random1=Math.floor(num1);

var num2= Math.random();
num2=(num2*6) + 1 ;
var random2=Math.floor(num2);

var img1= "images/dice"+ random1 + ".png";
var img2= "images/dice"+ random2 + ".png";

document.querySelectorAll(".block img")[0].setAttribute("src" ,img1);
document.querySelectorAll(".block img")[1].setAttribute("src" ,img2);


if(random1>random2){
  document.querySelector("h2").innerHTML="👍 Player 1 Wins!!";
}
else if (random1<random2){
  document.querySelector("h2").innerHTML="Player 2 Wins 👍 !!";
}
else{
  document.querySelector("h2").innerHTML="Draw!!!";
}
