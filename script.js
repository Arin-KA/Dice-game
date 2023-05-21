var randomNumber1=Math.random()*6;
var random1=Math.floor(randomNumber1)+1;
var image1="dice" + random1 + ".png";
var imgsrc1="images/" + image1;
document.querySelectorAll("img")[0].setAttribute("src",imgsrc1);

var randomNumber2=Math.random()*6;
var random2=Math.floor(randomNumber2)+1;
var image2="dice" + random2 + ".png";
var imgsrc2="images/" + image2;
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);

if(random1>random2){
    document.querySelector("h1").innerHTML="🚩 player1 wins";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="player2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}