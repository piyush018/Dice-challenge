
var dice_1 = Math.floor((Math.random()*6)+1);
var random_image1 = "dice" + dice_1 + ".png";

var random1 = "images/" + random_image1;

var change  = document.querySelectorAll("img")[0].setAttribute("src",random1);
  
var dice_2 = Math.floor((Math.random()*6)+1);
var random_image2 = "dice"  + dice_2 + ".png";

var random2 = "images/" + random_image2;
var change2 = document.querySelectorAll("img")[1].setAttribute("src",random2);
if(dice_1 > dice_2){
    document.querySelector("h1").innerHTML= "player 1 win";
}
else if(dice_1 < dice_2){
    document.querySelector("h1").innerHTML = "player 2 win";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}